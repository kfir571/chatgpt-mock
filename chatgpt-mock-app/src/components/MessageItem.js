function MessageItem({ type, message }) {

const queryStyle = {
    alignSelf: "flex-end",        // מיישר לימין בתוך flex
    backgroundColor: "#d4f8d4",   // ירוק בהיר
    color: "#000",                // טקסט שחור
    padding: "10px",
    borderRadius: "12px",
    maxWidth: "60%",
    marginBottom: "8px"
};

    const responseStyle = {
        alignSelf: "flex-start",      // מיישר לשמאל בתוך flex
        backgroundColor: "#e0e0e0",   // אפור בהיר
        color: "#000",
        padding: "10px",
        borderRadius: "12px",
        maxWidth: "60%",
        marginBottom: "8px"
    };
      

    return (
        <div style={(type === "qwery") ? queryStyle : responseStyle}>
            {message}
        </div>
    );
} export default MessageItem;