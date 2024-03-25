import { FaArrowRight } from "react-icons/fa6";

const Chat = () => {
  return (
    <div className="justify-between">
      <div className="absolute left-0 top-24 md:top-40 w-full p-2">
        <div className="flex mx-auto items-center text-slate-200 max-w-4xl p-2 ">
          Search for your dream destination
        </div>
        <form className="flex flex-col gap-3 md:flex-row mx-auto items-center text-slate-200 max-w-4xl p-2 ">
          <input
            type="text"
            placeholder="City"
            className="w-full md:w-[46%] bg-slate-400/20 p-3 rounded-md text-slate-300 border-none outline-none focus:ring-0"
          />
          <input
            type="text"
            placeholder="Country"
            className="w-full md:w-[46%] bg-slate-400/20 p-3 rounded-md text-slate-300 border-none outline-none focus:ring-0"
          />
          <button className="flex items-center gap-2 md:px-2 px-4 bg-[#2B59FF] rounded-md md:rounded-full p-2">
            <span className="flex md:hidden">Search</span>
            <FaArrowRight size={20} />{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
