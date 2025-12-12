import { useState } from "react";

const HomePage = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const fetchData = async () => {
        const response = await fetch("http://localhost:5000/api/users", {
            method: "GET",
            credentials: "include",
        });
        if (!response.ok) {
            console.error("Failed to fetch data");
            setError("Failed to fetch data");
            return;
        }
        const data = await response.json();
        setData(data);
    };
    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <p>This is the main content of the home page.</p>
            <button onClick={fetchData}>Fetch Data</button>
            {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
            {error && <div className="error-message">{error}</div>}
        </div>
    );
};

export default HomePage;