const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

async function fetcher(endpoint, options = {}) {
  const res = await fetch(`${API_BASE}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }

  return res.json();
}

// Blog APIs
export async function getBlogs(params = {}) {
  const query = new URLSearchParams(params).toString();
  return fetcher(`/blogs?${query}`);
}

export async function getBlogBySlug(slug) {
  return fetcher(`/blogs/${slug}`);
}

// Gallery APIs
export async function getGalleryImages(params = {}) {
  const query = new URLSearchParams(params).toString();
  return fetcher(`/gallery?${query}`);
}

// Career APIs
export async function getCareers() {
  return fetcher("/careers");
}

export async function getCareerById(id) {
  return fetcher(`/careers/${id}`);
}

// Form submission APIs
export async function submitContactForm(data) {
  return fetcher("/contact", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function submitPickupForm(data) {
  return fetcher("/schedule-pickup", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function submitApplication(id, formData) {
  const res = await fetch(`${API_BASE}/careers/${id}/apply`, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }

  return res.json();
}
