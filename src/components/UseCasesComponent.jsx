import React, { useState } from 'react';
// import './Counter.css';

export default function UseCasesComponent({ children }) {
  cardsObjects = [
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
  return (
    <>
      <div className="w-full max-w-screen-2xl mx-auto pt-24 lg:pt-5 space-y-4 flex justify-center flex-col px-2 sm:px-3 lg:px-5">
        <div className="w-full grid gap-5 px-4 lg:px-16 md:grid-cols-2 xl:grid-cols-3 justify-center pb-20 xl:pb-32">
          {cardsObjects.map((cardData, index) => (
            <div
              className="w-full flex flex-col justify-between bg-gradient-to-tr from-[#414153] to-[#0A0A0F] h-auto drop-shadow-md space-y-2 rounded-sm p-6"
              key={index}
            >
              <div className="space-y-2">
                <p className="lg:text-lg text-white">{cardData.heading}</p>
                <p className="text-[#636374] font-semibold lg:text-xl">
                  <span className="text-[#636374]">{cardData.description}</span>
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
          ))}
        </div>
      </div>
    </>
  );
}
