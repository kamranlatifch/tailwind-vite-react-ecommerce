import React from 'react';
import FeatureProductCard from './FeatureProductCard';

const FeatureSection = () => {
  const data = [
    {
      id: 0,
      name: 'Dried Mango',
      price: '$ 100',
      rating: 4,
      img: '/product__1.webp',
    },
    {
      id: 1,
      name: 'Crunchy Chips',
      price: '$ 200',
      img: '/product__2.webp',
      rating: 5,
    },
    {
      id: 2,
      name: 'Jewel Cranberries',
      price: '$ 130',
      img: '/product__3.webp',
      rating: 4,
    },
    {
      id: 3,
      name: 'Almond Organic',
      price: '$ 109',
      img: '/product__4.webp',
      rating: 4,
    },
  ];
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
          <img
            className='h-full w-full object-cover'
            src='/feature__1.webp'
            alt='banner'
          />
        </div>
        {data?.map((item, index) => {
          return (
            <FeatureProductCard
              key={item?.id}
              img={item?.img}
              name={item?.name}
              price={item?.price}
              rating={item.rating}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FeatureSection;
