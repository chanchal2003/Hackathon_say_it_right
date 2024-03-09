import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from '@/components/ui/button';
import { IoIosSearch } from "react-icons/io";

type Props = {};

const Search = (props: Props) => {
  return (
    <div className="flex items-center w-full relative mt-[30px] ">
      <Input
        className='flex-grow border h-[50px] rounded-2xl pl-[20px] pr-[40px] text-[20px] font-medium bg-gray-100 text-zinc-500 border-purple-700'
        type='text'
        placeholder='Search for any word...'
      />
      <Button
        className="absolute right-0 border-none bg-gray-100 top-[2px]"
        variant="outline"
        size="icon"
        style={{ height: '85%',right:'10px', bottom:'0px' }}
      >
        <IoIosSearch className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default Search;
