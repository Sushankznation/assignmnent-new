import { useState } from "react";
import PlayerList from "./components/PlayerList";
import Filter from "./components/Filter";
import SortButton from "./UI/SortButton";
import playersData from "./data/playersData";
const App = () => {
  const [players, setPlayers] = useState(playersData);

  const [filteredPlayers, setFilteredPlayers] = useState(players);
  const [sortOrder, setSortOrder] = useState("asc");
  const [itemsPerPage] = useState(5);

  const filterPlayers = ({ name, minAverage, maxAverage }) => {
    const filtered = players.filter(
      (player) =>
        player.name.toLowerCase().includes(name.toLowerCase()) &&
        player.battingAverage >= minAverage &&
        player.battingAverage <= maxAverage
    );

    setFilteredPlayers(filtered);
  };

  const sortPlayers = () => {
    const sortedPlayers = [...filteredPlayers].sort((a, b) => {
      const order = sortOrder === "asc" ? 1 : -1;
      return order * (a.battingAverage - b.battingAverage);
    });

    setFilteredPlayers(sortedPlayers);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div className="h-full mx-auto p-4 table content-stretch items-baseline w-full text-center">
      <h1 className="text-3xl font-bold mb-4">
        Cricket Player Management System
      </h1>
      <div className="grid grid-cols-1  gap-4">
        <div>
          <Filter onFilter={filterPlayers} />
          <SortButton
            label={`Sort by Batting Average (${sortOrder})`}
            onClick={sortPlayers}
            className="mb-4 sm:mb-0"
          />
        </div>
        <PlayerList players={filteredPlayers} itemsPerPage={itemsPerPage} />
      </div>
    </div>
  );
};

export default App;
