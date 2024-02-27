const PlayerItem = ({ player }) => (
  <tr className="bg-white border-b p-4">
    <td className="text-xl font-bold">{player.name}</td>
    <td className="text-lg">{player.country}</td>
    <td className="text-lg">{player.battingAverage}</td>
  </tr>
);

export default PlayerItem;
