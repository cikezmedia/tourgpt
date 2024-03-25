import { FaArrowRight } from "react-icons/fa6";

const Chat = () => {
  return (
    <div className="justify-between">
      <div className="absolute left-0 top-24 md:top-40 w-full p-2">
        <div className="flex mx-auto items-center text-slate-200 max-w-4xl p-2 ">
          <pre>Waiting...</pre>
        </div>
      </div>
      <div className="absolute bottom-2 left-0 px-2  w-full">
        <form className="flex mx-auto bg-slate-400/20 max-w-4xl p-4 rounded-md">
          <input
            type="text"
            placeholder="Search city"
            className="w-full bg-transparent pr-4 text-slate-300 border-none outline-none focus:ring-0"
          />
          <button className="bg-[#2B59FF] rounded-full p-2">
            <FaArrowRight size={20} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
