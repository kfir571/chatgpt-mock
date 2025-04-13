import { useRef, useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

function ChatInput({ onAddMessage }) {
    const [input, setInput] = useState("");
    const textareaRef = useRef(null);
    

    const handleSend = (e) => {
        e.preventDefault();

        if (input.trim() === "")
            return;

        onAddMessage({type:"query", message:input});
        setInput("");
    };

    useEffect(() => {
        if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
        textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 150)}px`;
        }
    }, [input]);

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey && !isMobile) {
        e.preventDefault();  
        handleSend(e);       
        }
    };

     

    return (
    <form onSubmit={handleSend} className="chat-input">
        <textarea className="textarea"
            ref={textareaRef}
            value={input} 
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="What do you have in mind?"   
        />
        <button type="submit">
            <FaArrowUp size={24} />
        </button>
    </form>
    );
} export default ChatInput;