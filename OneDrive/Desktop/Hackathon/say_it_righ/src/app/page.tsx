
import { ModeToggle } from "./components/ModeToggle";
import { RiBookLine } from "react-icons/ri";

export default function Home() {
  return (
    <main className="max-w-[689px] flex justify-between m-auto border">
      <RiBookLine className="text-4xl text-gray-400" />
      <ModeToggle></ModeToggle>
    </main>
  );
}
