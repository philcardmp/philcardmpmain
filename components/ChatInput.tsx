import { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { db } from "../firebase";
import firebase from "firebase/compat/app";

export default function ChatInput({ email, userId, chatRef, image }) {
    const [input, setInput] = useState("");

    const sendMessage = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        db.collection("users").doc(userId).collection("messages").add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: email,
            userImage: image,
        });

        chatRef.current.scrollIntoView({
            behavior: "smooth",
        });

        setInput("");
    };

    return (
        <Form onSubmit={sendMessage}>
            <Form.Group className="mb-3">
                <FormControl
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Message PCM Admin"
                />
                <Button variant="primary" type="submit" onClick={sendMessage} className="d-none">
                    SEND
                </Button>
            </Form.Group>
        </Form>
    );
}
