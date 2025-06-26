import { useEffect, useState } from "react";

const mockData = [
  { username: "Player1", wager: 52340 },
  { username: "Player2", wager: 48200 },
  { username: "Player3", wager: 39900 },
  { username: "Player4", wager: 31200 },
  { username: "Player5", wager: 29750 }
];

export default function Leaderboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => setData(mockData), 1000);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-2">🔥 Wager Leaderboard 🔥</h1>
      <p className="mb-8 text-lg">
        Showing total wagers from <strong>June 11</strong> to <strong>June 30</strong>
      </p>

      <div className="w-full max-w-xl">
        {data ? (
          data.map((player, idx) => (
            <div
              key={idx}
              className="flex justify-between bg-gray-800 border border-gray-700 rounded p-4 mb-3"
            >
              <div className="flex gap-4 items-center">
                <span className="text-xl font-bold w-8">#{idx + 1}</span>
                <span className="text-lg">{player.username}</span>
              </div>
              <span className="text-green-400 font-mono text-xl">
                ${player.wager.toLocaleString()}
              </span>
            </div>
          ))
        ) : (
          <p>Loading leaderboard...</p>
        )}
      </div>
    </main>
  );
}
