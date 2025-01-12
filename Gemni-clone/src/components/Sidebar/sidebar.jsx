import React, { useContext, useState, useEffect } from "react";
import { GoPlus } from "react-icons/go";
import { Context } from "../../context/context";

const Sidebar = () => {
  const [extended, setExtended] = useState(false); // Default value will be set in useEffect
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const { onSent, prevPrompts, setRecentPrompt, setInput, resetChat } = useContext(Context); // Added resetChat

  // Effect to set extended state based on screen size
  useEffect(() => {
    const handleResize = () => {
      setExtended(window.innerWidth >= 768); // Set based on screen size
    };

    handleResize(); // Set initial state based on current window size
    window.addEventListener("resize", handleResize); // Add listener for future resizes

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup listener on unmount
    };
  }, []);

  const loadPrompt = async (prompt) => {
    if (isLoading) return; // Prevent further clicks if loading
    setRecentPrompt(prompt); // Set the selected prompt as the recent prompt

    // Prevent adding duplicate prompts
    if (!prevPrompts.includes(prompt)) {
      setRecentPrompt((prev) => [...prev, prompt]);
    }

    setIsLoading(true); // Set loading state

    try {
      await onSent(prompt); // Call the onSent function to handle the prompt
    } catch (error) {
      console.error("Error sending prompt:", error);
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  const handleNewChat = () => {
    resetChat(); // Call resetChat from context
  };

  return (
    <div
      className={`flex flex-col justify-between bg-[#f0f4f9] p-4 font-outfit max-h-screen ${
        extended ? "md:flex" : "hidden md:flex"
      }`}
    >
      <div>
        <img
          src="/assets/menu_icon.png"
          alt="Menu Icon"
          className="w-4 h-4 ml-2.5 hover:cursor-pointer"
          onClick={() => setExtended((prev) => !prev)}
        />
        <div
          className="mt-4 inline-flex items-center gap-2.5 p-2.5 bg-[#e6eaf1] rounded-full text-gray-500 cursor-pointer"
          onClick={handleNewChat}
        >
          <GoPlus className="w-5 h-5" />
          {extended && <p className="hidden md:block">New Chat</p>} {/* Show text only on medium screens and up */}
        </div>
        {extended && (
          <div className="flex flex-col mt-4">
            <p className="mb-2 text-sm font-semibold">Recent</p>
            {prevPrompts.map((item, index) => (
              <div
                className={`flex items-center p-2 pr-10 rounded-full text-[#282828] cursor-pointer hover:bg-[#e2e6eb] ${
                  isLoading ? "opacity-50" : ""
                }`}
                key={index}
                onClick={() => loadPrompt(item)} // Call loadPrompt when clicked
              >
                <img
                  src="/assets/message_icon.png"
                  className="w-5 pt-1"
                  alt="Message Icon"
                />
                <p className="truncate hidden md:block">{item}</p> {/* Show full text only on medium screens and up */}
              </div>
            ))}
          </div>
        )}
      </div>

      <div
        className={`flex flex-col gap-4 mt-4 ${
          extended ? "items-start pl-2" : "items-center"
        }`}
      >
        <div className="flex items-center gap-2 cursor-pointer hover:bg-[#e2e6eb] p-2 rounded-full">
          <img
            src="/assets/question_icon.png"
            className="w-5 h-5"
            alt="Help Icon"
          />
          {extended && (
            <p className="text-sm hidden md:block">Help</p>
          )}{" "}
          {/* Show text only on medium screens and up */}
        </div>
        <div className="flex items-center gap-2 cursor-pointer hover:bg-[#e2e6eb] p-2 rounded-full">
          <img
            src="/assets/history_icon.png"
            className="w-5 h-5"
            alt="Activity Icon"
          />
          {extended && (
            <p className="text-sm hidden md:block">Activity</p>
          )}{" "}
          {/* Show text only on medium screens and up */}
        </div>
        <div className="flex items-center gap-2 cursor-pointer hover:bg-[#e2e6eb] p-2 rounded-full">
          <img
            src="/assets/setting_icon.png"
            className="w-5 h-5"
            alt="Settings Icon"
          />
          {extended && (
            <p className="text-sm hidden md:block">Settings</p>
          )}{" "}
          {/* Show text only on medium screens and up */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
