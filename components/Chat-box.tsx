import React from "react";
import { Button } from "./ui/button";

const ChatBox = () => {
  return (
    <div className=" w-screen h-screen flex justify-center items-center">
      {/* Container */}
      <div className=" space-y-2  w-[20vw] h-[20vh] ">
        {/* Chat box */}
        <div className="text-white  border-2 p-[5px] h-full rounded-sm">
          {" "}
          Chat Box
        </div>
        {/* Button */}
        <div>
          <Button className="w-full">Send</Button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
