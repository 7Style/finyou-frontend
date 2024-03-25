import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { IoIosSearch } from 'react-icons/io';
import { Input } from '@/components/ui/input';

interface SearchFilterProps { }

export const SearchFilter: React.FC<SearchFilterProps> = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [dropdownItems, setDropdownItems] = useState<string[]>([
        'Item 1',
        'Item 2',
        'Item 3',
    ]);

    const filteredItems = dropdownItems.filter(item =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleButtonClick = () => {
        setSearchTerm(''); // Clear search term when button is clicked
    };

    return (
        <div className="relative md:w-64">
            <Input className='h-9' placeholder='Search Result' value={searchTerm} onChange={handleSearchInputChange} />
            <Button className="absolute top-0 end-0 h-9 px-2.5 text-sm font-medium text-white bg-cyan-700 rounded-sm" onClick={handleButtonClick}>
                <IoIosSearch className="text-lg" />
                <span className="sr-only">Search</span>
            </Button>
            {searchTerm && (
                <div className="absolute mt-2 w-full bg-white border border-gray-200 shadow-lg rounded">
                    {filteredItems.length > 0 ? (
                        <ul>
                            {filteredItems.map((item, index) => (
                                <li key={index} className="text-xs border-b border-gray-100 px-4 py-2 cursor-pointer hover:bg-gray-100">{item}</li>
                            ))}
                        </ul>
                    ) : (
                        <div className="text-xs border-b border-gray-100 px-4 py-2">No results found</div>
                    )}
                </div>
            )}
        </div>
    );
};
