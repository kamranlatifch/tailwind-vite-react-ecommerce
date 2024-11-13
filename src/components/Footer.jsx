import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import {
  LiaGiftSolid,
  LiaMoneyBillWaveSolid,
  LiaShippingFastSolid,
} from 'react-icons/lia';
import { FooterCard } from './FooterCard';

const Footer = () => {
  const data = [
    {
      title: 'Free Shipping',
      icon: <LiaShippingFastSolid />,
    },
    {
      title: 'Best Price Guarantee',
      icon: <LiaMoneyBillWaveSolid />,
    },
    {
      title: 'Free Curbside Pickup',
      icon: <LiaGiftSolid />,
    },
    {
      title: 'Suppost 24/7',
      icon: <FiPhoneCall />,
    },
  ];
  return (
    <>
      <div className='container pt-16'>
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4 justify-center'>
          {data?.map((item, index) => (
            <FooterCard key={index} title={item?.title} icon={item?.icon} />
          ))}
        </div>
      </div>
      <div className='border-t border-gray-300 mt-16'>
        <div className='container text-center text-gray-500 py-4'>
          &copy; Copyright @KLC-Dev 2024
        </div>
      </div>
    </>
  );
};

export default Footer;
