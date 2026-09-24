import { useEffect, useState } from "react";

function App() {
    const [message, setMessage] = useState("Connecting to backend...");

    useEffect(() => {
        fetch("http://65.0.176.82:5000/")
            .then((response) => response.json())
            .then((data) => {
                setMessage(data.message);
            })
            .catch(() => {
                setMessage("Backend connection faileed");
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