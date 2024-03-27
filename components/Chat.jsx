"use client";

import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

const Chat = () => {
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(text);
  };
  return (
    <div className="justify-between">
      <div className="absolute left-0 top-24 md:top-40 w-full p-2">
        <div className="flex mx-auto items-center text-slate-200 max-w-4xl p-2 ">
          <pre>Message...</pre>
        </div>
      </div>
      <div className="absolute bottom-2 left-0 px-2  w-full">
        <form
          onSubmit={handleSubmit}
          className="flex mx-auto bg-slate-400/20 max-w-4xl p-4 rounded-md"
        >
          <input
            type="text"
            placeholder="Chat with Tour AI"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
            className="w-full bg-transparent join-item pr-4 text-slate-300 border-none outline-none focus:ring-0"
          />
          <button
            type="submit"
            className="bg-[#2B59FF] join-item rounded-full p-2"
          >
            <FaArrowRight size={20} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
