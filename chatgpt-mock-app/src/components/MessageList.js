import MessageItem from "./MessageItem";

function MessageList({ messages }) {

    return (
        <div className="message-list">
            {messages.map((message, index) => (
                <MessageItem type={message.type} message={message.message} key={index}></MessageItem>
            ))}
        </div>
    );
} export default MessageList;