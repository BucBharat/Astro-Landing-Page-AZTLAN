import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function CarouselComp({ children }) {
  let cardsObjects = [
    {
      tags: ['blog', 'product', 'marketing'],
      heading: 'Churn Prediction',
      link: '/blog/churn_prediction',
      color: 'E79E53',
      field: 'Finance',
      description:
        'Predict when customers are likely to leave and take proactive measures to reduce churn.',
    },
    {
      tags: ['blog', 'sales'],
      heading: 'Lead Conversion',
      link: '/blog/lead_conversion',
      color: 'EA8BE7',
      description:
        'Understand which leads are likely to convert for you using power of machine learning.',
    },
  ];

  const cardsObjects1 = [
    {
      name: 'fraud',
      tags: ['blog', 'finance'],
      heading: 'Fraud Detection',
      link: '/blog/fraud_Detection',
      color: '56CAE0',
      description:
        'Detect fraudulent transactions at the root and take actions against it',
    },
    {
      name: 'insurance',
      tags: ['blog', 'finance', 'operations'],
      heading: 'Insurance Price Prediction',
      link: '/blog/insurance_cost',
      color: 'EA8BE7',
      description:
        'Predict price of the insurance based on history of the driver, age etc.',
    },
    {
      name: 'lead',
      tags: ['blog', 'sales'],
      heading: 'Lead Conversion',
      link: '/blog/lead_conversion',
      color: 'EA8BE7',
      description:
        'Understand which leads are likely to convert for you using power of machine learning.',
    },
    {
      name: 'churn',
      tags: ['blog', 'product', 'marketing'],
      heading: 'Churn Prediction',
      link: '/blog/churn_prediction',
      color: 'E79E53',
      description:
        'Predict when customers are likely to leave and take proactive measures to reduce churn.',
    },
    {
      name: 'price',
      tags: ['blog', 'product', 'sales', 'finance'],
      heading: 'Price Prediction',
      link: '/blog/price_prediction',
      color: 'AE78F7',
      description:
        'Use dynamic pricing to understand if the users are willing to pay more like airplane tickets.',
    },
    {
      name: 'cross',
      tags: ['blog', 'marketing', 'product', 'sales'],
      heading: 'Cross selling',
      link: '/blog/cross_selling',
      color: '56CAE0',
      description:
        'Cross-selling is the practice of marketing additional products to existing customers.',
    },
    {
      name: 'employee',
      tags: ['blog', 'product', 'support'],
      heading: 'Employee Attrition',
      link: '/blog/employee_attrition',
      color: '56CAE0',
      description:
        'Predict which employee of yours is likely to leave and take active steps to ensure you retain them',
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 5,
    },
  };
  //   const [modalOpen, setModalOpen] = useState(initialModalOpen);
  //   const add = () => {
  //     setCount(i => i + 1);
  //     console.log('adding');
  //   };
  //   const subtract = () => {
  //     setCount(i => i - 1);
  //     console.log('Subtracting');
  //   };
  //   const clickEvent = () => {
  //     setModalOpen(modalOpen => !modalOpen);
  //     console.log('toggling modal open');
  //   };

  //   const modalClose = () => {
  //     setModalOpen(modalOpen => false);
  //     console.log('setting modalOpen as false');
  //   };

  return (
    <>
      <Carousel responsive={responsive}>
        {/* {cardsObjects.map((cardData, index) => (
          <div
            className="flex flex-col justify-between relative h-[320px] w-[300px] p-6 m-5 space-y-2 bg-gradient-to-tr from-[#414153] to-[#0A0A0F] rounded-sm  drop-shadow-2xl"
            key={index}
          >
            <div className="pb-5">
              <p className=" text-white lg:text-lg">{cardData.heading}</p>
              <p className="font-semibold text-gray-400 lg:text-xl">
                {cardData.description}
              </p>
            </div>
            <div className="flex justify-start w-full gap-2">
              {cardData.tags.map((tag, index1) => (
                <div
                  className="flex items-center justify-center h-8 p-1 px-2 text-sm text-white bg-[#ffffff4d] rounded-sm capitalize"
                  key={index1}
                >
                  <span>{tag}</span>
                </div>
              ))}
            </div>
          </div>
        ))} */}
        <div className="flex flex-col justify-between relative h-[320px] w-[300px] p-6 m-5 space-y-2 bg-gradient-to-tr from-[#414153] to-[#0A0A0F] rounded-sm  drop-shadow-2xl">
          <div className="pb-5">
            <p className=" text-white lg:text-lg">Heading Field</p>
            <p className="font-semibold text-gray-400 lg:text-xl">
              Description Field
            </p>
          </div>
          <div className="flex justify-start w-full gap-2">
            <div className="flex items-center justify-center h-8 p-1 px-2 text-sm text-white bg-[#ffffff4d] rounded-sm capitalize">
              <span>Tag Field</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between relative h-[320px] w-[300px] p-6 m-5 space-y-2 bg-gradient-to-tr from-[#414153] to-[#0A0A0F] rounded-sm  drop-shadow-2xl">
          <div className="pb-5">
            <p className=" text-white lg:text-lg">Heading Field</p>
            <p className="font-semibold text-gray-400 lg:text-xl">
              Description Field
            </p>
          </div>
          <div className="flex justify-start w-full gap-2">
            <div className="flex items-center justify-center h-8 p-1 px-2 text-sm text-white bg-[#ffffff4d] rounded-sm capitalize">
              <span>Tag Field</span>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col justify-between relative h-[320px] w-[300px] p-6 m-5 space-y-2 bg-gradient-to-tr from-[#414153] to-[#0A0A0F] rounded-sm  drop-shadow-2xl">
          <div className="pb-5">
            <p className=" text-white lg:text-lg">Heading Field</p>
            <p className="font-semibold text-gray-400 lg:text-xl">
              Description Field
            </p>
          </div>
          <div className="flex justify-start w-full gap-2">
            <div className="flex items-center justify-center h-8 p-1 px-2 text-sm text-white bg-[#ffffff4d] rounded-sm capitalize">
              <span>Tag Field</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between relative h-[320px] w-[300px] p-6 m-5 space-y-2 bg-gradient-to-tr from-[#414153] to-[#0A0A0F] rounded-sm  drop-shadow-2xl">
          <div className="pb-5">
            <p className=" text-white lg:text-lg">Heading Field</p>
            <p className="font-semibold text-gray-400 lg:text-xl">
              Description Field
            </p>
          </div>
          <div className="flex justify-start w-full gap-2">
            <div className="flex items-center justify-center h-8 p-1 px-2 text-sm text-white bg-[#ffffff4d] rounded-sm capitalize">
              <span>Tag Field</span>
            </div>
          </div>
        </div> */}
      </Carousel>
    </>
  );
}
