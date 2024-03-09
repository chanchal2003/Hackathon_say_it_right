import Search from "./components/Search";
import { ModeToggle } from "./components/ModeToggle";
import { RiBookLine } from "react-icons/ri";

export default function Home() {
  return (
    <main className="max-w-[689px] m-auto mt-[35px] flex flex-col border-none ">
      
      {/* header */}
      <div className="flex justify-between flex-wrap content-center h-[60px]">
        <RiBookLine className="text-4xl text-gray-400 " />
        <ModeToggle></ModeToggle>
      </div>

      {/* SearchBar */}
      <Search></Search>
      
      {/*main section  */}

    </main>
  );
}
