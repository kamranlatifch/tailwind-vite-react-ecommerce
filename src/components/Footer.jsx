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
    <div className='container pt-16'>
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4 justify-center'>
        {data?.map((item, index) => (
          <FooterCard title={item?.title} icon={item?.icon} />
        ))}
      </div>
    </div>
  );
};

export default Footer;
