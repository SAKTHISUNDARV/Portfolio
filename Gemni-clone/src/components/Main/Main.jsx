import React, { useContext } from "react";
import { Context } from "../../context/context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
    error,
  } = useContext(Context);

  const handleSend = () => {
    if (!input.trim()) {
      alert("Input cannot be empty");
      return;
    }
    onSent(input);
    setInput(""); // Clear input after sending
  };

  return (
    <div className="flex-1 pb-[5vh] relative bg-white min-h-screen font-outfit">
      {/* Header Section */}
      <div className="flex items-center justify-between text-xl text-[#585858] p-5">
        <p className="text-2xl">Gemini</p>
        <img
          src="/assets/user_icon.png"
          className="w-8 h-8 rounded-full"
          alt="User Icon"
        />
      </div>

      {/* Main Content Area */}
      <div className="overflow-auto flex-1 max-h-[calc(100vh-120px)]">
        {!showResult ? (
          <>
            <div className="text-center my-8 text-[#c4c7c5] text-[50px] p-3">
              <p className="bg-gradient-text bg-clip-text text-transparent">
                Hello, Sakthi.
              </p>
              <p>How can I help you today?</p>
            </div>

            <div className="max-w-screen-lg m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { img: "/assets/compass_icon.png", text: "Suggest beautiful places to see on the upcoming road trip" },
                { img: "/assets/bulb_icon.png", text: "Briefly summarize the concept: tech" },
                { img: "/assets/code_icon.png", text: "Improve the readability of the following code" },
                { img: "/assets/message_icon.png", text: "Brainstorm team bonding activities for our work retreat" },
                { img: "/assets/compass_icon.png", text: "Create a checklist for the project deliverables" },
                { img: "/assets/bulb_icon.png", text: "Generate new ideas for our next product launch" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-3 bg-[#f0f4f9] rounded-lg shadow-md cursor-pointer hover:bg-[#dfe4ea]"
                  onClick={() => setInput(item.text)}
                  aria-label={`Set input to: ${item.text}`} // Accessibility label
                >
                  <img src={item.img} alt={`${item.text} Icon`} className="w-8 h-8 mb-4" />
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="max-w-screen-lg m-auto justify-center items-center p-6">
            <div id="result-container" className="p-4 rounded-lg max-h-full overflow-auto">
              {loading ? (
                <div className="flex flex-row gap-4">
                  <img src="/assets/gemini_icon.png" alt="Gemini Icon" className="w-8 h-8" />
                  <div className="w-full flex flex-col gap-10 animation-loader">
                    {[...Array(3)].map((_, idx) => (
                      <hr key={idx} className="rounded-4 border-none bg-[#f6f7f8] bg-gradient-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff] h-5" />
                    ))}
                  </div>
                </div>
              ) : error ? (
                <div className="text-red-500">
                  <p>{error.message || "An unexpected error occurred. Please try again."}</p>
                  <button 
                    className="mt-2 text-blue-500 underline"
                    onClick={() => setInput("")} // Example action to clear input
                  >
                    Try Again
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-6 max-w-4xl mx-auto">
                  {/* User Query */}
                  <div className="flex items-start gap-4">
                    <img
                      src="/assets/user_icon.png"
                      alt="User Icon"
                      className="w-10 h-10 rounded-full"
                    />
                    <p className="px-4 py-3 rounded-lg text-sm leading-relaxed" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                      {recentPrompt}
                    </p>
                  </div>

                  {/* AI Response */}
                  <div className="flex items-start gap-4">
                    <img
                      src="/assets/gemini_icon.png"
                      alt="Gemini Icon"
                      className="w-10 h-10"
                    />
                    <div
                      dangerouslySetInnerHTML={{ __html: resultData }}
                      className="px-4 py-3 rounded-lg text-sm leading-relaxed" style={{ fontSize: '16px', lineHeight: '1.9' }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="flex flex-col items-center justify-center fixed bottom-0 bg-white px-4 py-3 w-full">
        <div className="flex items-center gap-4 bg-[#f0f4f9] rounded-full px-4 py-2 w-full max-w-screen-md">
          <img
            src="/assets/gallery_icon.png"
            alt="Gallery Icon"
            className="w-6 h-6"
          />
          <input
            type="text"
            placeholder="Ask me anything..."
            className="flex-1 bg-transparent px-4 py-2 focus:outline-none"
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSend();
              }
            }}
            value={input}
            aria-label="Input question" // Accessibility label
          />
          <img
            src="/assets/mic_icon.png"
            alt="Mic Icon"
            className="w-6 h-6"
          />
          <img
            src="/assets/send_icon.png"
            alt="Send Icon"
            className="w-8 h-8 cursor-pointer"
            onClick={handleSend}
            aria-label="Send message" // Accessibility label
          />
        </div>
        <p className="text-gray-500 text-xs mt-2 text-center">Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>
      </div>
    </div>
  );
};

export default Main;
