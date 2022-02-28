import React, { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

export default function Carousel({ children, modalOpen: initialModalOpen }) {
  const [modalOpen, setModalOpen] = useState(initialModalOpen);
  const add = () => {
    setCount(i => i + 1);
    console.log('adding');
  };
  const subtract = () => {
    setCount(i => i - 1);
    console.log('Subtracting');
  };
  const clickEvent = () => {
    setModalOpen(modalOpen => !modalOpen);
    console.log('toggling modal open');
  };

  const modalClose = () => {
    setModalOpen(modalOpen => false);
    console.log('setting modalOpen as false');
  };

  return (
    <>
      <button onClick={clickEvent}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <line
            x1="9"
            y1="7"
            x2="23"
            y2="7"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
          ></line>
          <line
            x1="4"
            y1="15"
            x2="23"
            y2="15"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
          ></line>
        </svg>
      </button>
      <div
        id="myModal"
        className={
          'h-screen overflow-hidden ' + (modalOpen ? 'flex' : 'hidden')
        }
      >
        <div className="h-full bg-black overflow-hidden modal-content">
          <div className="flex text-white items-center justify-between text-2xl font-bold">
            EngageML (beta)
            <span className="close" onClick={modalClose}>
              &times;
            </span>
          </div>
          <div className="h-screen mt-20 text-center">
            <a href="/usecases">
              <p className="mb-5 text-xl text-gray-400">Use Cases</p>
            </a>
          </div>
          <div className="fixed flex flex-col items-center  text-white justify-center w-full mx-auto -ml-5 text-lg tex-center bottom-5">
            <p>EngageML</p>
          </div>
        </div>
      </div>
    </>
  );
}
