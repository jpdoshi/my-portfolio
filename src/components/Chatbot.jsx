import React from "react";

const Chatbot = () => {
  return (
    <img
      src="/assets/chatbot.png"
      alt="chatbot"
      height={120}
      width={120}
      loading="lazy"
      onClick={() => {
        window.open("https://ai.jpdoshi.tech/", "_blank");
      }}
      className="chatbot"
    />
  );
};

export default Chatbot;
