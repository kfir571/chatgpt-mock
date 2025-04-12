import { useState } from "react";
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";

function ChatBox() {
    const [messages, setMessages] = useState([]);
    const [numberRespons, setNumberRespons] = useState(0);

    const sendToGPT = async (queryText) => {
        const numRespons = numberRespons;
        setNumberRespons(numberRespons + 1);

        setMessages((prevMessages) => [...prevMessages, {
            type: "response",
            message: "Response number: " + numRespons
          }]);
    }

    const handelGetNewMessage = (newMessage) => {
        setMessages((prevMessages) => [...prevMessages, newMessage]);
        sendToGPT("");
    }

    return (
        <div className="temp">
            <div className="chat-box">
                <MessageList messages={messages} />
            </div>
            <div className="">
                <ChatInput onAddMessage={handelGetNewMessage} />
            </div>
        </div>
        
        
    );
} export default ChatBox;