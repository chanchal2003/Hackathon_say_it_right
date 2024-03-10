import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from '@/components/ui/button';
import { IoIosSearch } from "react-icons/io";

type Props = {};

const Search = (props: Props) => {
  return (
    <div className="flex items-center w-full relative">
      <input placeholder="Search any word..." className=" placeholder:font-bold rounded-2xl outline-purple-700 bg-gray-200 h-12  sm:h-[64px] w-full px-4 pr-12 dark:bg-slate-900 z-10" type="text"></input>
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
