
import React, { useState } from "react";
import PlayerItem from "../UI/PlayerItem";
import Pagination from "./Pagination";

const PlayerList = ({ players, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastPlayer = currentPage * itemsPerPage;
  const indexOfFirstPlayer = indexOfLastPlayer - itemsPerPage;
  const currentPlayers = players.slice(indexOfFirstPlayer, indexOfLastPlayer);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto p-4">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-200 text-center">
            <th className="text-left p-2">Name</th>
            <th className="text-left p-2">Country</th>
            <th className="text-left p-2">Batting Average</th>
          </tr>
        </thead>
        <tbody>
          {currentPlayers.map((player) => (
            <PlayerItem key={player.id} player={player} />
          ))}
        </tbody>
      </table>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={players.length}
        paginate={paginate}
      />
    </div>
  );
};

export default PlayerList;
