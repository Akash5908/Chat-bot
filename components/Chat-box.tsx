"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import axios from "axios";
import { Send } from "lucide-react";
// import VantaBackground from "./animation/VantaNetBackground";
import VantaGlobeBackground from "./animation/VantaGlobeBackground";

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
    setMessage([...newMessage, { role: "assistant", content: res.data.reply }]);
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black">
      {/* Glowy animated background layer */}
      <div className="absolute top-0 left-0 w-full h-[60vh]  z-0 animate-pulse bg-gradient-to-br from-purple-500/30 via-blue-300/20 to-pink-600/20 blur-2xl" />
      {/* <VantaNetBackground /> */}
      {/* Chat content */}
      <div className="relative z-10 flex justify-center items-center w-full h-full">
        {/* <VantaBackground /> */}
        <VantaGlobeBackground />
        <div className="space-y-2 w-[90vw] sm:w-[40vw] h-[70vh] max-sm:h-[80vh] md:h-[80vh] lg:h-[80vh] bg-black/60 border border-white/20 backdrop-blur-md p-4 rounded-lg">
          {/* ✅ Brand Name */}
          <h1 className="text-center text-2xl sm:text-3xl font-bold text-purple-300 tracking-wider animate-pulse">
            🤖 ChatBot
          </h1>
          {/* Chat messages */}
          <div className="text-white flex flex-col space-y-2 border border-white/10 p-2 h-[75%] rounded-sm overflow-y-auto scroll-smooth scrollbar-thin scrollbar-thumb-violet-500 scrollbar-track-gray-700">
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

          {/* Input box */}
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anything..."
            className="w-full h-[5vh] bg-white rounded-sm px-2 text-black"
          />

          {/* Button */}
          <Button
            className="w-full hover:bg-slate-300 bg-white text-slate-900"
            onClick={handleMessage}
          >
            Ask <Send className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
