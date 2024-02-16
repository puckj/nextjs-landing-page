import Image from "next/image";
import React from "react";
import SupportImg from "../../../../public/images/support.jpg";
import { CheckIcon } from "@heroicons/react/16/solid";

const CustomerSupport = () => {
  return (
    <div className="pt-[5rem] pb-[3rem]">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[4rem] items-center">
        <div className="order-2 lg:order-1">
          <Image src={SupportImg} alt="support" />
        </div>
        <div className="order-1 lg:order-2">
          <h1
            className="text-[20px] md:text-[25px] lg:text-[28px] text-[#02073e]
          font-bold leading-[2rem] md:leading-[3rem]"
          >
            Customer support is our main priority with their hundred percent
            satisfaction.
          </h1>
          <p className="mt-[1.5rem] mb-[1.5rem] text-black opacity-90 text-[15px] md:text-[16px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            animi error deleniti, dignissimos fuga sed velit laboriosam debitis
            explicabo inventore.
          </p>
          <div className="flex items-center mb-[1rem] space-x-3">
            <CheckIcon className="w-[1.3rem] h-[1.3rem] text-red-600" />
            <p className="text-[17px] text-[#02073e] font-[500]">
              Medical and Vision
            </p>
          </div>
          <div className="flex items-center mb-[1rem] space-x-3">
            <CheckIcon className="w-[1.3rem] h-[1.3rem] text-red-600" />
            <p className="text-[17px] text-[#02073e] font-[500]">
              Life insurance
            </p>
          </div>
          <div className="flex items-center mb-[1rem] space-x-3">
            <CheckIcon className="w-[1.3rem] h-[1.3rem] text-red-600" />
            <p className="text-[17px] text-[#02073e] font-[500]">
              400(k) savings
            </p>
          </div>
          <div className="flex items-center mb-[1rem] space-x-3">
            <CheckIcon className="w-[1.3rem] h-[1.3rem] text-red-600" />
            <p className="text-[17px] text-[#02073e] font-[500]">
              HSAs and FSAs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSupport;
