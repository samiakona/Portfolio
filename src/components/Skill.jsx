import {
  RiBootstrapLine,
  RiCss3Line,
  RiDatabaseLine,
  RiHtml5Line,
  RiJavaLine,
  RiJavascriptLine,
  RiReactjsLine,
} from "react-icons/ri";

const Skill = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        MY
        <span className="text-neutral-500">SKILL </span>
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className=" text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiHtml5Line className=" text-7xl text-orange-600" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiCss3Line className=" text-7xl text-blue-700" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiJavascriptLine className=" text-7xl text-yellow-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiJavaLine className=" text-7xl text-orange-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiDatabaseLine className=" text-7xl text-blue-900" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiBootstrapLine className=" text-7xl text-white" />
        </div>
      </div>
    </div>
  );
};

export default Skill;
