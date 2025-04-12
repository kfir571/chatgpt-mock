import { useState } from "react";

function ChatInput({ onAddMessage }) {
    const [input, setInput] = useState("");
    const [type, setType] = useState("qwery");


    const handleSend = (e) => {
        e.preventDefault();

        if (input.trim() === "")
            return;

        onAddMessage({type:type, message:input});
        
        if (type === "qwery")
        {
            setType("response");
        }
        else {
            setType("qwery");
        }
        setInput("");
    };

    

    return (
    <form onSubmit={handleSend}>
        <input
            value={input} 
            onChange={(e) => setInput(e.target.value)}
            placeholder="כתוב הודעה"    
        />
        <button type="submit">שלח</button>
    </form>
    );
} export default ChatInput;