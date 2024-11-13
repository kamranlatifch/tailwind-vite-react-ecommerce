import React from 'react';

const FeatureSection = () => {
  return (
    <div className='container pt-16'>
      <div className='lg:flex justify-between items-start'>
        <div className=''>
          <h3 className='font-medium text-2xl'>Fruits & Vegitables</h3>
          <p className='text-gray-600 mt-2'>
            Buy farm fresh fruits and vegetables online at the best prices.
          </p>
        </div>

        <div className='space-x-4 mt-8 lg:mt-0'>
          <button className='feature_btn hover:bg-accentDark'>Fruits</button>
          <button className='text-gray-600 hover:text-accent'>
            Vegetables
          </button>
          <button className='text-gray-600 hover:text-accent '>
            Bread & Bakery
          </button>
        </div>
      </div>

      <div className='grid sm:grid-cols-2 md:grid-cols-4  lg:grid-cols-5 pt-8 gap-2'>
        <div className=''>
          <img src='/feature__1.webp' alt='banner' />
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;