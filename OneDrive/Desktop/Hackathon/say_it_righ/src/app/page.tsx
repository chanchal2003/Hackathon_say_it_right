import Search from "./components/Search";
import { ModeToggle } from "./components/ModeToggle";
import { RiBookLine } from "react-icons/ri";
import { IoIosPlay } from "react-icons/io";

export default function Home() {
  return (
    // <main className="max-w-[689px] m-auto mt-[35px] flex flex-col border-none ">
    <main className="max-w-[689px] flex flex-col gap-6  mx-auto py-10  px-4 ">
      {/* header */}
      <div className="flex justify-between flex-wrap content-center h-[60px]">
        <RiBookLine className="text-4xl text-gray-400 " />
        <ModeToggle></ModeToggle>
      </div>

      {/* SearchBar */}
      <Search></Search>

      {/*main section  */}
      <section className="flex flex-col gap-8">
        <section className="flex flex-col gap-1">
          <div className="flex justify-between w-full h-16 items-center">
            <h1 className="text-[64px] font-bold">computer</h1>
            <button className="h-16 w-16 bg-purple-300 opacity-70 rounded-full flex justify-center flex-wrap items-center text-4xl transition-all text-purple-700 hover:text-white hover:bg-purple-700">
              <IoIosPlay />
              {/* <IoIosPlay className="text-purple  group-hover:text-white  transition-all" /> */}
            </button>
          </div>
          <p className=" text-purple-700 text-[25px]">{`/kəmˈpjuːtə/`}</p>
        </section>

        <div className="flex flex-row gap-5 items-center">
          <p className="text-2xl font-semibold italic">noun</p>
          <div className="w-full h-[2px] bg-gray-200 rounded-full"></div>
        </div>

        {/* Meaning */}
        <section >
          <p className="text-xl font-medium">Meaning </p>
          <ul className="list w-11/12 m-auto flex flex-col gap-2">
            <li className="flex flex-row flex-wrap gap-2">
              <div className="h-1.5 w-1.5 bg-purple-300 rounded-full mt-3" />
              <p className="text-lg">A person employed to perform computations; one who computes.</p>
            </li>
            <li className="flex gap-2">
              <div className="h-1.5 w-1.5 bg-purple-300 rounded-full mt-3" />
              <p className="text-lg">(by restriction) A male computer, where the female computer  is called a computress.

              </p>
            </li>
            <li className="flex gap-2">
              {/* <div className="h-[6px] w-[6px] bg-purple-300 rounded-full mt-3" /> */}
              <div className="min-h-1.5 min-w-1.5 h-1.5 w-1.5 bg-purple-300 rounded-full mt-3" />
              <p className="text-lg">A programmable electronic device that performs mathematical calculations and logical operations, especially one that can process, store and retrieve large amounts of data very quickly; now especially, a small one for personal or home use employed for manipulating text or graphics, accessing the Internet, or playing games or media.
              </p>
            </li>
          </ul>
        </section>

        <div className="flex gap-2 align-middle">
          <p className="text-gray-400 text-xl">Synonyms: </p>
          <p className="text-xl">greeting</p>
        </div>

        <div className="w-full h-[1px] bg-gray-200 rounded-full"></div>
        {/* <hr></hr> */}
      </section>

    </main>
  );
}
