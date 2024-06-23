// 'use client'
import React from 'react';

interface ICheckbox {
  label: string;
  checked: boolean;
  onChange: (isChecked: boolean) => void;
}

const Checkbox: React.FC<ICheckbox> = ({ label, checked, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    onChange(isChecked);
  };

  return (
    <label className="flex items-center mb-4 hover:text-teal-400 text-gray-900 dark:text-gray-300">
      <input
        id="default-checkbox"
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-cyan-700 dark:focus:ring-cyan-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <span className="ml-2 text-sm font-medium">{label}</span>
    </label>
  );
};

export default Checkbox;
