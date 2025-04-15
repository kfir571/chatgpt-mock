import { useState/*, useRef */} from "react";
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";
import { sendToGPTApi } from "../services/gptService";

function ChatBox({ collapsed, messages, setMessages, historyChat }) {
    const [isLoading, setIsLoading] = useState(false);

    const sendToGPT = async (queryText) => {
        try {
            setIsLoading(true);
            setMessages((prevMessages) => {
                const update = [...prevMessages];
                update[historyChat] = [...update[historyChat], { type: "response", message: "thinking..." }];
                return update;
            });
            const gptResponse = await sendToGPTApi(queryText);

            setMessages((prevMessages) => {
                const update = [...prevMessages];
                update[historyChat] = [...update[historyChat].slice(0, -1), { type: "response", message: gptResponse }];
                return update;
            });
        } catch (error) {
            console.error("Error sending message to GPT:", error);
            setMessages((prevMessages) => {
                const update = [...prevMessages];
                update[historyChat] = [...update[historyChat].slice(0, -1), { type: "response", message: "Error Send To GPT" }];
                return update;
            });
        }

        setIsLoading(false)
    };

    const handelGetNewMessage = (newMessage) => {
        setMessages((prevMessages) => {
            const update = [...prevMessages];
            update[historyChat] = [...update[historyChat], newMessage];
            return update;
        }); 

        sendToGPT(newMessage.message);
    }

    return (
        <div className={`main-page ${collapsed ? "collapsed" : ""}`} >
            <MessageList messages={messages} />
            <ChatInput onAddMessage={handelGetNewMessage} isLoading={isLoading} />
        </div>
    );
} export default ChatBox;