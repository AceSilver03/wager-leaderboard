const leaderboardData = [
  { username: "simplyjessie", wager: 5298 },
  { username: "illuminence", wager: 4796 },
  { username: "YUNGTHOT", wager: 2103 },
  { username: "DWLLL", wager: 1799 },
  { username: "GoofyGoober", wager: 1484 }
];

export default function Leaderboard() {
  return (
    <main className="flex items-center justify-center h-full text-center px-4">
      <div>
        <h1 className="text-4xl font-bold mb-2">🔥 WAGER LEADERBOARD 🔥</h1>
        <p className="mb-8 text-lg">11th June to 30th June</p>
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
