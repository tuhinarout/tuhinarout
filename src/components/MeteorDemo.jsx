import Feathures from "./features/Feathures";
import Meteors from "./magicui/Meteors";

export function MeteorDemo() {
  return (
    <div className=" bg-black relative flex h-[100%] w-full flex-col  bg-background md:shadow-xl overflow-hidden">
    <Meteors number={30} />
    <span className=" whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text   text-transparent dark:from-white dark:to-slate-900/10">
     <Feathures/>
    </span>
  </div>
  );
}
