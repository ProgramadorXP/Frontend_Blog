import { useQuery } from "@tanstack/react-query";
import { getMessage } from "./api/PostAPI";

function App() {
  const { data: message, isLoading, error } = useQuery({
    queryKey: ["message"],
    queryFn: getMessage,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {(error as Error).message}</div>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <h1>Message from the server:</h1>
      <p className="text-green-500 text-2xl">{message}</p>
      <p>This is a simple message fetched from the server.</p>
      <p>Enjoy your day!</p>
    </div>
  );
}

export default App;
