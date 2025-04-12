import { useState } from "react";

function ChatInput({ onAddMessage }) {
    const [input, setInput] = useState("");

    const handleSend = (e) => {
        e.preventDefault();

        if (input.trim() === "")
            return;

        onAddMessage({type:"query", message:input});
        setInput("");
    };

    

    return (
    <form onSubmit={handleSend} className="chat-input">
        <input
            value={input} 
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anyting"   
        />
        <button type="submit">שלח</button>
    </form>
    );
} export default ChatInput;