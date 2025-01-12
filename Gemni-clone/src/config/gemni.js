import { GoogleGenerativeAI } from "@google/generative-ai";

// Directly define the API key (ensure this is stored securely in production)
const apiKey = "AIzaSyAtS5tdc1IBvek4AreGZZoYiYfL-o4MIYE";

if (!apiKey) {
  throw new Error("API key is missing.");
}

// Initialize the Google Generative AI instance
const genAI = new GoogleGenerativeAI(apiKey);

// Get the generative model instance
const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
});

// Configuration for generation
const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

// Function to run the AI generation with a prompt
async function run(prompt) {
  // Start a new chat session with the specified generation configuration
  const chatSession = model.startChat({
    generationConfig,
    history: [], // Initialize with an empty history
  });

  try {
    // Send the prompt to the chat session and wait for the response
    const result = await chatSession.sendMessage(prompt);
    return result.response.text(); // Return the text response
  } catch (error) {
    console.error("Error generating response:", error.message);
    throw error; // Propagate the error for further handling
  }
}

export default run;
