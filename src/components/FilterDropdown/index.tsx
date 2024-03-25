"use client"
import React, { useState, ChangeEvent } from 'react';

type FilterDropdownProps = {
    isMultiSelect?: boolean;
};

export default function FilterDropdown({ isMultiSelect = false }: FilterDropdownProps) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedItems, setSelectedItems] = useState(new Set()); // Stores the selected items
    const [searchTerm, setSearchTerm] = useState('');

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if (isMultiSelect) {
            setSelectedItems((prevSelectedItems) => {
                const newSet = new Set(prevSelectedItems);
                if (newSet.has(value)) {
                    newSet.delete(value);
                } else {
                    newSet.add(value);
                }
                return newSet;
            });
        } else {
            setSelectedItems(new Set([value]));
            toggleDropdown();
        }
    };
    
    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    // This can be replaced with your actual data
    const items: string[] = [
        'Bonnie Green',
        'Jese Leos',
        'Michael Gough',
        'Robert Wall',
        'Joseph Mcfall',
        'Leslie Livingston',
        'Roberta Casas'
    ];

    const filteredItems = items.filter(item =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="relative inline-block text-left">
            <button onClick={toggleDropdown} className="text-cyan-700 border border-cyan-700 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-full text-sm px-5 py-1.5 text-center inline-flex items-center dark:focus:ring-cyan-800" type="button">
                Select Filter
                <svg className="w-2.5 h-2.5 ms-3">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
            </button>

            <div className={`z-10 ${isDropdownOpen ? 'block' : 'hidden'} bg-white rounded-lg shadow w-60 dark:bg-gray-700 absolute mt-1`}>
                <div className="p-3">
                    <label htmlFor="input-group-search" className="sr-only">Search</label>
                    <div className="relative">
                        <input
                            type="text"
                            id="input-group-search"
                            className="block w-full p-1 ps-5 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-cyan-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search"
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                        <div className="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <ul className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownSearchButton">
                    {filteredItems.map((item, index) => (
                        <li key={index}>
                            <div className="flex items-center ps-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                <input 
                                  id={`checkbox-item-${index}`} 
                                  type={isMultiSelect ? "checkbox" : "radio"} 
                                  value={item} 
                                  checked={selectedItems.has(item)}
                                  onChange={handleCheckboxChange}
                                  className="w-3 h-3 text-cyan-600 bg-gray-100 border-gray-300 rounded focus:ring-cyan-500 dark:focus:ring-cyan-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" 
                                />
                                <label htmlFor={`checkbox-item-${index}`} className="w-full py-2 ms-2 text-xs font-medium text-gray-900 rounded dark:text-gray-300">{item}</label>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
