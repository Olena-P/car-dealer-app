'use client';

import { useState, useRef, useEffect } from 'react';

interface CustomSelectorProps {
  label: string;
  items: string[];
  selectedItem: string;
  setSelectedItem: (item: string) => void;
  enableSearch?: boolean;
}

export default function CustomSelector({
  label,
  items,
  selectedItem,
  setSelectedItem,
  enableSearch = false,
}: CustomSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const ref = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        closeDropdown();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const highlightMatch = (text: string, term: string) => {
    if (!term) return text;

    const regex = new RegExp(`(${term})`, 'gi');
    return text.replace(regex, '<strong>$1</strong>');
  };

  return (
    <div ref={ref} className="relative w-full">
      <label htmlFor={label} className="block text-sm font-medium mb-2">
        {label}
      </label>
      <button
        onClick={toggleDropdown}
        className="inline-flex justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border rounded-lg"
      >
        <span>{selectedItem || `Choose ${label}`}</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.67419 8.59228L6.83926 7.42581L10.3387 10.921L13.8339 7.42159L15.0004 8.58666L10.3401 13.2526L5.67419 8.59228Z"
            fill="black"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-lg max-h-48 overflow-auto shadow-lg">
          {enableSearch && (
            <div className="p-2">
              <input
                type="text"
                placeholder={`Search ${label}`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
          )}
          <div>
            {filteredItems.map((item) => (
              <div
                key={item}
                onClick={() => {
                  setSelectedItem(item);
                  closeDropdown();
                }}
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                dangerouslySetInnerHTML={{
                  __html: highlightMatch(item, searchTerm),
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
