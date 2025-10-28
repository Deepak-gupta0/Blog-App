import BlogPost from '@/components/BlogPost'
import React from 'react'

export default function page() {
  const blog = []
  return (
    <div className='my-4'>
      <BlogPost blog={blog} />
    </div>
  )
}
