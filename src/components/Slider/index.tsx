'use client'
import React, { useState } from 'react';
import { Range } from 'react-range';

interface SliderProps {
  min: number;
  max: number;
  step: number;
  initialValues?: number[];
  onChange?: (values: number[]) => void;
  showTooltip?: boolean;
  tooltipPosition?: 'top' | 'bottom';
  includeTooltipBg?: boolean
}

export default function Slider({ 
  min,
  max,
  step,
  initialValues = [min, max],
  onChange,
  showTooltip = true,
  tooltipPosition = 'top',
  includeTooltipBg = true
 }: SliderProps) {
  const [values, setValues] = useState<number[]>(initialValues);

  const handleChange = (newValues: number[]) => {
    setValues(newValues);
    if (onChange) {
      onChange(newValues);
    }
  };


  const renderTooltip = (value: number, index: number) => (
    <div className={`rounded-lg absolute -${tooltipPosition}-10`}>
      {(includeTooltipBg  && tooltipPosition === 'bottom') && (
        <svg className="mx-auto -mb-0.5 rotate-180" xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9" fill="none">
          <path d="M14.0711 0.485289C14.962 0.485289 15.4081 1.56243 14.7782 2.1924L8.70711 8.26347C8.31658 8.654 7.68342 8.654 7.29289 8.26347L1.22183 2.1924C0.591867 1.56243 1.03803 0.485289 1.92894 0.485289L14.0711 0.485289Z" fill="white"/>
        </svg>
      )}
      <div className={`w-[41px] h-[34px] text-slate-700 text-xs ${includeTooltipBg ? 'bg-white py-2' : ''} rounded-md font-medium text-center leading-[18px]`}>
        {value}%
      </div>

      {tooltipPosition === 'top' && (
        <svg className="mx-auto -mt-0.5" xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9" fill="none">
          <path d="M14.0711 0.485289C14.962 0.485289 15.4081 1.56243 14.7782 2.1924L8.70711 8.26347C8.31658 8.654 7.68342 8.654 7.29289 8.26347L1.22183 2.1924C0.591867 1.56243 1.03803 0.485289 1.92894 0.485289L14.0711 0.485289Z" fill="white"/>
        </svg>
      )}
    </div>
  );

  return (
    <div className="w-full">
      <Range
        step={step}
        min={min}
        max={max}
        values={values}
        onChange={handleChange}
        renderTrack={({ props, children }) => (
          <div {...props} className="w-full h-2 bg-gray-200 rounded-md"
          style={{
            background: `linear-gradient(to right, #EAECF0 ${values[0]}%, #107A8A ${values[0]}%, #107A8A ${values[1]}%, #EAECF0 ${values[1]}%)`,
          }}>
            {children}
          </div>
        )}
        renderThumb={({ props, index }) => (
          <div
            {...props}
            key={index}
            className="flex flex-col items-center focus:outline-none"
            style={props.style}
          >
            <div className="w-6 h-6 justify-center items-center inline-flex">
              <div className="w-6 h-6 bg-white rounded-full shadow border border-cyan-700" />
            </div>
            {showTooltip && renderTooltip(values[index], index)}
          </div>
        )}
      />
    </div>
  );
}
