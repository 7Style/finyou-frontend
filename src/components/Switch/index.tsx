'use client'
import React, { useState } from 'react';

export default function Switch() {
  const [isChecked, setIsChecked] = useState(false);

  const toggleSwitch = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex items-center gap-2">
        <span className={`text-sm font-medium ${isChecked ? 'text-gray-400' : 'text-gray-900'}`}>Off</span>
        <label className="relative inline-flex items-center mx-2 cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={isChecked}
              onChange={toggleSwitch}
            />
            <div className={`w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-cyan-300 dark:peer-focus:ring-cyan-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 ${isChecked ? 'after:start-[10px]' : 'after:start-[3px]'} after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3.5 after:w-3.5 after:transition-all dark:border-gray-600 peer-checked:bg-cyan-600`}></div>
        </label>
        <span className={`text-sm font-medium ${isChecked ? 'text-gray-900' : 'text-gray-400'}`}>On</span>
    </div>
  )
}
