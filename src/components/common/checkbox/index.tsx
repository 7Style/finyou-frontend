// 'use client'
import React from 'react';

interface ICheckbox {
  label: string;
}

const Checkbox: React.FC<ICheckbox> = ({ label }) => {
  return (
    <div className="inline-flex items-center">
      <label className="relative flex items-center rounded-sm cursor-pointer" htmlFor="check">
        <input type="checkbox"
          className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-sm border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-teal-600 checked:bg-teal-600 checked:before:bg-teal-600"
          id="check" />
        <span
          className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
            stroke="currentColor" strokeWidth="1">
            <path fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"></path>
          </svg>
        </span>
      </label>
      <label className="px-2 text-neutral-900 text-sm font-medium cursor-pointer select-none" htmlFor="check">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
