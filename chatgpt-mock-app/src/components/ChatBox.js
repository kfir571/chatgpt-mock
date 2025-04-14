import { useState } from "react";
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";
import { sendToGPTApi } from "../services/gptService";
import Title from "./Title";

function ChatBox() {
    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const sendToGPT = async (queryText) => {
        try {
            setIsLoading(true);
            setMessages((prevMessages) => [
                ...prevMessages,
                { type: "response", message: "thinking..." }
            ]);
            const gptResponse = await sendToGPTApi(queryText);

            setMessages((prevMessages) => [
                ...prevMessages.slice(0, -1),
                { type: "response", message: gptResponse }
            ]);
        } catch (error) {
            console.error("Error sending message to GPT:", error);
            setMessages((prevMessages) => [
                ...prevMessages.slice(0, -1),
                { type: "response", message: "Error Send To GPT" }
            ]);
        }

        setIsLoading(false)
    };

    const handelGetNewMessage = (newMessage) => {
        setMessages((prevMessages) => [...prevMessages, newMessage]);
        sendToGPT(newMessage.message);
    }

    return (
        <div className="main-page">
            <Title className="k-gpt" />
            <MessageList messages={messages} />
            <ChatInput onAddMessage={handelGetNewMessage} isLoading={isLoading} />
        </div>
    );
} export default ChatBox;