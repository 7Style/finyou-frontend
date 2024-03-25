'use client'
import React, { useState } from 'react';
import classNames from 'classnames';

interface RadioProps {
  options: {
    value: string;
    label: string;
  };
  disabled?: boolean;
}

export default function RadioButtons({ options, disabled }: RadioProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleRadioChange = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex items-center ps-3">
        <input id="list-radio-license" type="radio" value="" name="list-radio" className={classNames(
            'w-4',
            'h-4',
            'text-blue-600',
            'bg-gray-100',
            'border-gray-300',
            'focus:outline-none',
            'focus:ring-blue-500',
            'focus',
            'hover:cursor-pointer',
            'hover:bg-teal-400',
            {
                'bg-cyan-700 border-cyan-700': selectedOption === options.value,
            }
        )} onChange={() => handleRadioChange(options.value)} disabled={disabled} />
        <label htmlFor="list-radio-license" className={classNames(
            'w-full',
            'py-3', 
            'ms-2', 
            'text-sm', 
            'font-medium', 
            'text-gray-900', 
            'dark:text-gray-300',
            'hover:cursor-pointer',
            {
                'text-cyan-700': selectedOption === options.value,
            }
            )}>
            {options.label}
        </label>
    </div>
  );
}
