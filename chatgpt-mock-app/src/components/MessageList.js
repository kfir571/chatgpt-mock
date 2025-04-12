import MessageItem from "./MessageItem";

function MessageList({ messages }) {

    return (
        <div>
            <ul>
                {messages.map((message, index) => (
                    <MessageItem type={message.type} message={message.message} key={index}></MessageItem>
                ))}
            </ul>
        </div>
    );
} export default MessageList;