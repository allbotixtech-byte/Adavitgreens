"use client";

import { useState, useEffect } from "react";
import { Plus, Trash2, Upload, X } from "lucide-react";
import { getAdminGallery, uploadGalleryImage, deleteGalleryImage } from "@/lib/adminApi";

const categories = ["Facility", "Operations", "Team", "Sustainability"];

export default function AdminGalleryPage() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showUpload, setShowUpload] = useState(false);
  const [uploadForm, setUploadForm] = useState({ title: "", category: "Facility", description: "" });
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const fetchImages = async () => {
    try {
      const data = await getAdminGallery();
      setImages(data.images || []);
    } catch {} finally { setLoading(false); }
  };

  useEffect(() => { fetchImages(); }, []);

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return;
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append("image", file);
      fd.append("title", uploadForm.title);
      fd.append("category", uploadForm.category);
      fd.append("description", uploadForm.description);
      await uploadGalleryImage(fd);
      setShowUpload(false);
      setFile(null);
      setUploadForm({ title: "", category: "Facility", description: "" });
      fetchImages();
    } catch {} finally { setUploading(false); }
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this image?")) return;
    try {
      await deleteGalleryImage(id);
      setImages(images.filter((i) => i._id !== id));
    } catch {}
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="font-heading text-2xl font-bold text-secondary-950">Gallery</h1>
        <button onClick={() => setShowUpload(true)} className="btn-primary text-sm py-2.5 px-5">
          <Plus size={16} /> Upload Image
        </button>
      </div>

      {/* Upload Modal */}
      {showUpload && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShowUpload(false)}>
          <div className="bg-white rounded-2xl p-8 w-full max-w-md border border-slate-200 shadow-xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-heading text-lg font-bold text-secondary-950">Upload Image</h3>
              <button onClick={() => setShowUpload(false)} className="text-slate-400 hover:text-slate-600 cursor-pointer"><X size={20} /></button>
            </div>
            <form onSubmit={handleUpload} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase mb-1.5">Image File *</label>
                <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} required className="text-sm file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:bg-primary-50 file:text-primary-700 file:font-semibold file:text-xs cursor-pointer" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase mb-1.5">Title</label>
                <input type="text" value={uploadForm.title} onChange={(e) => setUploadForm({ ...uploadForm, title: e.target.value })} placeholder="Image title" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase mb-1.5">Category</label>
                <select value={uploadForm.category} onChange={(e) => setUploadForm({ ...uploadForm, category: e.target.value })}>
                  {categories.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <button type="submit" disabled={uploading} className="btn-primary w-full py-3 text-sm">
                {uploading ? "Uploading..." : "Upload"} <Upload size={16} />
              </button>
            </form>
          </div>
        </div>
      )}

      {loading ? (
        <p className="text-slate-400 text-center py-12">Loading...</p>
      ) : images.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
          <p className="text-slate-400 mb-4">No images uploaded yet</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img) => (
            <div key={img._id} className="group relative bg-white rounded-xl border border-slate-200 overflow-hidden aspect-square">
              <img src={img.imageUrl} alt={img.title || ""} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-end">
                <div className="w-full p-3 translate-y-full group-hover:translate-y-0 transition-transform flex items-center justify-between">
                  <div>
                    <p className="text-white text-xs font-medium line-clamp-1">{img.title || "Untitled"}</p>
                    <p className="text-white/60 text-[10px]">{img.category}</p>
                  </div>
                  <button onClick={() => handleDelete(img._id)} className="p-2 bg-red-500 rounded-lg text-white hover:bg-red-600 cursor-pointer"><Trash2 size={14} /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
