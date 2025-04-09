"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import axios from "axios";
import { Send } from "lucide-react";

const ChatBox = () => {
  const [message, setMessage] = useState<{ role: string; content: string }[]>(
    []
  );
  const [input, setInput] = useState("");

  const handleMessage = async () => {
    if (!input.trim()) return;
    const newMessage = [...message, { role: "user", content: input }];
    setMessage(newMessage);
    setInput("");

    const res = await axios.post("/api/chat", { message: input });
    console.log(res);
    setMessage([...newMessage, { role: "assistant", content: res.data.reply }]);
  };

  return (
    <div className=" w-screen h-screen flex justify-center items-center">
      {/* Container */}
      <div className=" space-y-2  w-[40vw] h-[40vh] ">
        {/* Chat box */}
        <div>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anything..."
            className="w-full h-[5vh] bg-white rounded-sm px-2"
          />
        </div>
        ``
        <div className="text-white  flex flex-col space-y-1 border-2 p-[5px] h-full rounded-sm  overflow-x-scroll">
          {" "}
          {message.map((chat, idx) => (
            <p
              key={idx}
              className={`my-2 w-full ${
                chat.role === "assistant" ? "text-right  " : "text-left"
              }`}
            >
              <strong
                className={
                  chat.role === "assistant"
                    ? "text-green-200  p-2 rounded-sm  w-[10vw] "
                    : "text-white  p-2 rounded-sm "
                }
              >
                {chat.content}
              </strong>
            </p>
          ))}
        </div>
        {/* Button */}
        <div>
          <Button
            className="w-full hover:bg-slate-300 bg-white text-slate-900"
            onClick={() => handleMessage()}
          >
            Ask <Send />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
