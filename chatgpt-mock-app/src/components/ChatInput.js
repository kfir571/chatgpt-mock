import { useRef, useEffect, useState } from "react";
import { 
    FaArrowUp, 
    FaSpinner, 
    FaMicrophone, 
    FaGlobe, 
    FaPlus, 
    FaEllipsisH
    } from "react-icons/fa";

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
        <div className="input-box">
            <form id="chat-form" onSubmit={handleSend} className="chat-input">
                <textarea className="textarea"
                    ref={textareaRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="What do you have in mind?"
                />

            </form>
            <div className="input-buttons">
                <div>
                    <button><FaPlus size={18} color="#bbbbbb"/></button>
                    <button><FaGlobe size={18} color="#bbbbbb"/></button>
                    <button><FaEllipsisH size={18} color="#bbbbbb"/></button>
                </div>
                <div>
                    <button><FaMicrophone size={18} /></button>
                    <button 
                        id="submit-btn"
                        type="submit"
                        disabled={isLoading}
                        form="chat-form">
                        {isLoading ? (
                            <FaSpinner className="spinner" size={24} color="#363940"/>
                        ) : (
                            <FaArrowUp size={24} color="#363940"/>
                        )}
                    </button>
                </div>


            </div>
        </div>
    );
} export default ChatInput;