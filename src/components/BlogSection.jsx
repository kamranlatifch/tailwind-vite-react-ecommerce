import React from 'react';
import BlogCard from './BlogCard';
const BlogSection = () => {
  const data = [
    {
      img: '/post__1.webp',
      title: 'Healthy Food Healthy Life',
      date: 'Aug 27, 2024',
      comment: 8,
    },
    {
      img: '/post__2.webp',
      title: 'Healthy Food Healthy Life',
      date: 'Aug 15, 2024',
      comment: 8,
    },
    {
      img: '/post__3.webp',
      title: 'Healthy Food Healthy Life',
      date: 'Aug 01, 2024',
      comment: 8,
    },
  ];
  return (
    <div className='container pt-16'>
      <h2 className='font-bold text-2xl'>Latest News</h2>
      <p className='text-gray-500'>
        Present posts in abest way to highlight interesting moments of your
        blog.
      </p>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8'>
        {data?.map((item, index) => (
          <BlogCard
            img={item.img}
            title={item.title}
            date={item.date}
            comment={item.comment}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
