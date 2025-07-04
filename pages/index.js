const leaderboardData = [
  { username: "Crog", wager: 2661 },
  { username: "Saturce", wager: 1366 },
  { username: "Breeze", wager: 428 },
  { username: "Ace", wager: 0 },
  { username: "Rust", wager: 0 }
];

export default function Leaderboard() {
  return (
    <main className="flex items-center justify-center h-full text-center px-4">
      <div>
        <h1 className="text-4xl font-bold mb-2">🔥 LEADERBOARD 🔥</h1>
        <p className="mb-8 text-lg">1st July to 31st July</p>
        <div className="bg-black bg-opacity-60 rounded-lg p-4 max-w-md mx-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-400">
                <th>#</th>
                <th>PLAYER</th>
                <th className="text-right">WAGERED</th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData.map((player, i) => (
                <tr key={i} className="border-b border-gray-700">
                  <td>{i + 1}</td>
                  <td>{player.username}</td>
                  <td className="text-right">${player.wager.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
