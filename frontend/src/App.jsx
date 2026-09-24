import { useEffect, useState } from "react";

function App() {
    const [message, setMessage] = useState("Connecting to backend...");

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/`)
            .then((response) => response.json())
            .then((data) => {
                setMessage(data.message);
            })
            .catch(() => {
                setMessage("Backend connection failed");
            });
    }, []);

    return (
        <div>
            <h1>DevOps Task Manager</h1>
            <p>{message}</p>
        </div>
    );
}

export default App;