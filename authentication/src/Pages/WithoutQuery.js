import { useEffect, useState } from "react";

export const WithoutQuery = () => {

    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

        async function fetchAPI() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        
                // Check if the response was successful (status in the range 200-299)
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
        
                // Parse the JSON if the response is okay
                const data = await response.json();
                setData(data);
                console.log('Data:', data);
            } catch (error) {
                // Handle errors (network issues, bad response, etc.)
                console.error('Fetch error:', error);
                setError(error);
            } finally {
                setIsLoading(false);
                // Code that always runs after try/catch, regardless of success or failure
                console.log('Fetch operation finished');
            }
        }
        setIsLoading(true);
        fetchAPI();
    },[]);

    if (isLoading) return <p>Loading...</p>;
    
    if (error) return <p>An error has occurred: {error.message}</p>;
  
    return (
        <div>
            Without query
        <ul>
            {data.map(todo => (
            <li key={todo.id}>{todo.title}</li>
            ))}
        </ul>
      </div>
    );
};