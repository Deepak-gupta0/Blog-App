"use client";
import React, { useActionState, useEffect, useState } from "react";
import { Upload, X, Loader2 } from "lucide-react";
import { BlogSchema } from "@/lib/Schemas/BlogSchema";
import { flattenError } from "zod";
import { BlogAction } from "../actions/BlogAction";
import { useRouter } from "next/navigation";

export default function BlogCreator() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const [state, formAction, isPending] = useActionState(BlogAction, {});

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  useEffect(() => {
    if (state?.error) setErrors(state.error);

    if (state?.success) {
      setTitle("");
      setDesc("");
      setImage(null);
      setImagePreview(null);
      router.push("/");
    }
  }, [state, router]);

  const handleSubmit = async () => {
    if (!image) return setErrors({ image: "Please upload a cover image" });

    const parsed = BlogSchema.safeParse({ title, desc });
    if (!parsed.success) {
      return setErrors(flattenError(parsed.error).fieldErrors);
    }

    setErrors({});
    formAction({ ...parsed.data, blogImg: image });
  };

  const isFormValid = title.trim() && desc.trim() && image;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-3 sm:px-6">
      <div className="mx-auto max-w-2xl">
        <div className="rounded-2xl bg-white shadow-lg">
          {/* Header */}
          <div className="border-b px-5 sm:px-8 py-5">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
              Create Blog
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Write something worth reading ✨
            </p>
          </div>

          {/* Form */}
          <form action={handleSubmit} className="space-y-6 px-5 sm:px-8 py-6" noValidate>
            {/* Title */}
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="How I learned Next.js"
                className="w-full rounded-lg border px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
              {errors?.title && (
                <p className="mt-1 text-xs text-red-600">{errors.title}</p>
              )}
            </div>

            {/* Description */}
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Content
              </label>
              <textarea
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                rows={7}
                placeholder="Write your blog content here…"
                className="w-full resize-none rounded-lg border px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
              {errors?.desc && (
                <p className="mt-1 text-xs text-red-600">{errors.desc}</p>
              )}
            </div>

            {/* Image Upload */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Cover Image
              </label>

              {!imagePreview ? (
                <label className="flex h-48 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 text-center transition hover:border-blue-500 hover:bg-blue-50">
                  <Upload className="mb-2 h-8 w-8 text-gray-400" />
                  <p className="text-sm font-medium text-gray-600">
                    Click to upload
                  </p>
                  <p className="text-xs text-gray-400">PNG / JPG</p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </label>
              ) : (
                <div className="relative h-48 overflow-hidden rounded-xl border">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="h-full w-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setImage(null);
                      setImagePreview(null);
                    }}
                    className="absolute right-2 top-2 rounded-full bg-black/60 p-1.5 text-white hover:bg-black"
                  >
                    <X size={16} />
                  </button>
                </div>
              )}

              {errors?.image && (
                <p className="mt-1 text-xs text-red-600">{errors.image}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={!isFormValid || isPending}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 py-3 text-sm font-semibold text-white transition disabled:cursor-not-allowed disabled:bg-gray-300"
            >
              {isPending ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Uploading…
                </>
              ) : (
                "Publish Blog"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}