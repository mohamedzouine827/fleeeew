
"use client"

import React, { useEffect, useState } from 'react';

interface FormFieldProps {
  title: string;
  placeholder: string;
  inputType: 'text' | 'tags'; // This prop controls the input type
}

const FormField: React.FC<FormFieldProps> = ({ title, placeholder, inputType }) => {
    
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState<string>('');
  const [textInput, setTextInput] = useState<string>('');

  // Function to handle tag input and split them into an array
  const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setTagInput(input);

    const splitTags = input.split(',').map(tag => tag.trim()).filter(tag => tag !== '');
    setTags(splitTags);
  };

  // Function to handle normal text input
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextInput(e.target.value);
  };

  useEffect(() => (
    console.log(tags)
), [tags])

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-col gap-2'>
        <h1 className='text-[20px] leading-[28px] text-[#1E293B] font-medium'>{title}</h1>

        {inputType === 'text' ? (
          <input
            type="text"
            placeholder={placeholder}
            value={textInput}
            onChange={handleTextChange}
            className="w-[602px] px-[24px] py-4 border rounded-[8px] border-[#94A3B8] text-[#475569] text-[16px] leading-6 font-normal placeholder-[#475569] focus:outline-none focus:ring-2 focus:ring-[#64748B] focus:border-[#64748B] transition-colors"
          />
        ) : (
          <input
            type="text"
            placeholder={placeholder}
            value={tagInput}
            onChange={handleTagsChange}
            className="w-[602px] px-[24px] py-4 border rounded-[8px] border-[#94A3B8] text-[#475569] text-[16px] leading-6 font-normal placeholder-[#475569] focus:outline-none focus:ring-2 focus:ring-[#64748B] focus:border-[#64748B] transition-colors"
          />
        )}
      </div>

      
    </div>
  );
};

export default FormField;
