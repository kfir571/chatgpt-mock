import { useRef, useEffect, useState } from "react";
import { FaArrowUp, FaSpinner } from "react-icons/fa";

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

function ChatInput({ onAddMessage, isLoading }) {
    const [input, setInput] = useState("");
    const textareaRef = useRef(null);


    const handleSend = (e) => {
        e.preventDefault();

        if (input.trim() === "")
            return;

        onAddMessage({ type: "query", message: input });
        setInput("");
    };

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 150)}px`;
        }
    }, [input]);

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey && !isMobile && !isLoading) {
            e.preventDefault();
            handleSend(e);
        }
    };

    return (
        <div>
            <form onSubmit={handleSend} className="chat-input">
                <textarea className="textarea"
                    ref={textareaRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="What do you have in mind?"
                />
                <button type="submit" disabled={isLoading}>
                    {isLoading ? (
                        <FaSpinner className="spinner" size={24} />
                    ) : (
                        <FaArrowUp size={24} />
                    )}
                </button>
            </form>
        </div>
    );
} export default ChatInput;