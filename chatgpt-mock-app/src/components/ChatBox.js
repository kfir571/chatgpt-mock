import { useState } from "react";
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";

function ChatBox() {
    const [messages, setMessages] = useState([]);

    const handelGetNewMessage = (newMessage) => {
        const newMessagesList = [...messages, newMessage];
        setMessages(newMessagesList);
    }

    return (
        <div>
            <MessageList messages={messages} />
            <ChatInput onAddMessage={handelGetNewMessage} />
        </div>
    );
} export default ChatBox;