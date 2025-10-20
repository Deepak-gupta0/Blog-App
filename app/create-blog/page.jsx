"use client"
import React, { useActionState, useEffect, useState } from 'react';
import { Upload, X, Image, Save } from 'lucide-react';
import { BlogSchema } from '@/lib/Schemas/BlogSchema';
import { flattenError } from 'zod';
import { BlogAction } from '../actions/BlogAction';
import { useRouter } from 'next/navigation';

export default function BlogCreator() {
  const [title, setTitle] = useState('uuuuuuuuuuu');
  const [desc, setDesc] = useState('ppppppppppppppppppllllllllllllllllllllll');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [errors, setErrors] = useState({})
  const router = useRouter()

  const [state, formAction, isPending] = useActionState(BlogAction, {}) 

   const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    if(state.error){
      return setErrors(state.error)
    }

    if(state.success){
      setTitle("")
      setDesc("")
      setImage(null)
      setImagePreview(null)

      return router.push("/")
    }
  }, [state])

  const removeImage = () => {
    setImage(null);
    setImagePreview(null);
  };

  const handleSubmit =  async () => {
    if(!image){
      return setErrors({image : "Upload an Image of your blog"})
    }
    
    const {success, error, data} = BlogSchema.safeParse({title, desc})
    if(!success){
      return setErrors(flattenError(error).fieldErrors)
    }

    formAction({...data, blogImg: image})
    return ;
  };

  const isFormValid = title.trim() && desc.trim() && image;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="px-8 py-6">
            <h1 className="text-3xl font-bold text-gray-800">Create New Blog Post</h1>
            <p className="text-gray-600 mt-2">Share your thoughts with the world</p>
          </div>

          {/* Form */}
          <form action={handleSubmit} className="p-8 space-y-6" noValidate>
            {/* Title Field */}
            <div>
              <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-2">
                Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter your blog title..."
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all outline-none text-gray-800"
              />
              <p className='text-xs text-red-700 ml-2'>{errors?.title}</p>
            </div>

            {/* desc Field */}
            <div>
              <label htmlFor="desc" className="block text-sm font-semibold text-gray-700 mb-2">
                desc
              </label>
              <textarea
                id="desc"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                placeholder="Write your blog content here..."
                rows="8"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all outline-none text-gray-800 resize-none"
              />
              <p className='text-xs text-red-700 ml-2'>{errors?.desc}</p>
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Featured Image
              </label>
              
              {!imagePreview ? (
                <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-purple-500 hover:bg-purple-50 transition-all">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="w-12 h-12 text-gray-400 mb-3" />
                    <p className="mb-2 text-sm text-gray-600 font-semibold">
                      Click to upload image
                    </p>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                  </div>
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                  <p className='text-xs text-red-700 ml-2'>{errors?.image}</p>
                </label>
              ) : (
                <div className="relative w-full h-64 border-2 border-gray-200 rounded-lg overflow-hidden">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={removeImage}
                    className="absolute top-3 right-3 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors shadow-lg"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={!isFormValid || isPending}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all flex items-center justify-center gap-2 ${
                  isFormValid  
                    ? `bg-blue-600  shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${isPending? "cursor-not-allowed bg-gray-300" : null }`
                    : 'disabled:bg-gray-300 disabled:cursor-not-allowed'
                }`}
              >
                {!isPending? (
                  <span>Send</span>
                ) : (
                  <span>Uploading...</span>
                )}
              </button>
            </div>
          </form>
        </div>        
      </div>
    </div>
  );
}