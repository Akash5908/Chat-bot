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
        <div className="text-white flex flex-col space-y-2 border-2 p-2 h-full rounded-sm overflow-y-scroll">
          {message.map((chat, idx) => (
            <div
              key={idx}
              className={`w-full flex ${
                chat.role === "assistant" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`p-2 rounded-md max-w-[80%] ${
                  chat.role === "assistant"
                    ? "bg-green-700 text-white"
                    : "bg-gray-800"
                }`}
              >
                {chat.content}
              </div>
            </div>
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
