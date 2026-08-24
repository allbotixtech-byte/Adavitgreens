const API_BASE = "/api";

function getToken() {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("admin_token");
}

async function adminFetch(endpoint, options = {}) {
  const token = getToken();
  const headers = { ...options.headers };

  if (token) headers["Authorization"] = `Bearer ${token}`;
  if (!(options.body instanceof FormData)) {
    headers["Content-Type"] = "application/json";
  }

  const res = await fetch(`${API_BASE}${endpoint}`, { ...options, headers });

  if (res.status === 401) {
    if (typeof window !== "undefined") {
      localStorage.removeItem("admin_token");
      window.location.href = "/admin";
    }
    throw new Error("Session expired");
  }

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || `Error ${res.status}`);
  }

  return res.json();
}

// Auth
export async function adminLogin(email, password) {
  const data = await adminFetch("/admin/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
  if (data.token) localStorage.setItem("admin_token", data.token);
  return data;
}

export function adminLogout() {
  localStorage.removeItem("admin_token");
  window.location.href = "/admin";
}

export async function getAdminProfile() {
  return adminFetch("/admin/profile");
}

// Dashboard
export async function getDashboardStats() {
  return adminFetch("/admin/dashboard");
}

// Blogs
export async function getAdminBlogs(params = {}) {
  const query = new URLSearchParams(params).toString();
  return adminFetch(`/blogs?${query}`);
}

export async function getAdminBlogBySlug(slug) {
  return adminFetch(`/blogs/${slug}`);
}

export async function createBlog(formData) {
  return adminFetch("/blogs", { method: "POST", body: formData });
}

export async function updateBlog(slug, formData) {
  return adminFetch(`/blogs/${slug}`, { method: "PUT", body: formData });
}

export async function deleteBlog(slug) {
  return adminFetch(`/blogs/${slug}`, { method: "DELETE" });
}

// Gallery
export async function getAdminGallery(params = {}) {
  const query = new URLSearchParams(params).toString();
  return adminFetch(`/gallery?${query}`);
}

export async function uploadGalleryImage(formData) {
  return adminFetch("/gallery", { method: "POST", body: formData });
}

export async function updateGalleryImage(id, data) {
  return adminFetch(`/gallery/${id}`, { method: "PUT", body: JSON.stringify(data) });
}

export async function deleteGalleryImage(id) {
  return adminFetch(`/gallery/${id}`, { method: "DELETE" });
}

// Careers
export async function getAdminCareers() {
  return adminFetch("/careers");
}

export async function getAdminCareerById(id) {
  return adminFetch(`/careers/${id}`);
}

export async function createCareer(data) {
  return adminFetch("/careers", { method: "POST", body: JSON.stringify(data) });
}

export async function updateCareer(id, data) {
  return adminFetch(`/careers/${id}`, { method: "PUT", body: JSON.stringify(data) });
}

export async function deleteCareer(id) {
  return adminFetch(`/careers/${id}`, { method: "DELETE" });
}

// Applications
export async function getApplications() {
  return adminFetch("/careers/admin/applications");
}

// Contacts & Pickups
export async function getContactSubmissions() {
  return adminFetch("/admin/contacts");
}

export async function getPickupSubmissions() {
  return adminFetch("/admin/pickups");
}

export async function markContactRead(id) {
  return adminFetch(`/admin/contacts/${id}/read`, { method: "PUT" });
}

export async function markPickupRead(id) {
  return adminFetch(`/admin/pickups/${id}/read`, { method: "PUT" });
}

export async function deleteContact(id) {
  return adminFetch(`/admin/contacts/${id}`, { method: "DELETE" });
}

export async function deletePickup(id) {
  return adminFetch(`/admin/pickups/${id}`, { method: "DELETE" });
}
