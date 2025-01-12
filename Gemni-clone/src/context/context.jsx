import React, { createContext, useState } from "react";
import run from "../config/gemni";

const Context = createContext();

const ContextProvider = (props) => {
    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    // Function to gradually display the result data
    const delayPara = (index, nextWord) => {
        setTimeout(() => {
            setResultData((prev) => prev + nextWord); // Append word to resultData
        }, 75 * index); // Delay based on word index
    };

    // Function to handle sending input
    const onSent = async (prompt) => {
        setLoading(true);
        setShowResult(true);
        setResultData(""); // Reset the result data

        try {
            const activePrompt = prompt || input.trim(); // Use active prompt or input
            if (!activePrompt) {
                throw new Error("Input cannot be empty."); // Guard clause for empty input
            }

            const response = await run(activePrompt);

            // Update recent prompt and avoid duplicate additions in previous prompts
            setRecentPrompt(activePrompt);
            setPrevPrompts((prev) => {
                if (!prev.includes(activePrompt)) {
                    return [...prev, activePrompt];
                }
                return prev;
            });

            // Format response
            const formattedResponse = response
                .split("**")
                .map((chunk, index) => (index % 2 === 1 ? `<b>${chunk}</b>` : chunk))
                .join("")
                .split("*")
                .join("<br />");

            // Gradual display of response
            const responseArray = formattedResponse.split(" ");
            responseArray.forEach((word, i) => delayPara(i, word + " "));
        } catch (error) {
            console.error("Error in onSent:", error);
            setResultData(error.message || "Error generating response."); // Display error message
        } finally {
            setLoading(false);
            setInput(""); // Clear input after sending
        }
    };

    // Reset chat state
    const resetChat = () => {
        setInput("");
        setRecentPrompt("");
        setResultData("");
        setShowResult(false);
        setLoading(false);
    };

    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        resetChat, // Expose resetChat
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
    };

    return <Context.Provider value={contextValue}>{props.children}</Context.Provider>;
};

export { Context, ContextProvider };
