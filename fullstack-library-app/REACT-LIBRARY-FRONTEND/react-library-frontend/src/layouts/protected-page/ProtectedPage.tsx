import {useState} from "react";

export const ProtectedPage = () => {
    const [response, setResponse] = useState<string>("Loading...");

    return (
        <div>
            <h1> Protected Page</h1>
            <p>{response}</p>
        </div>
    );
};