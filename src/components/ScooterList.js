import React from "react";
import ScootterListItem from "./ScooterListItem";

export default function ScootterList({ scooters }) {
  return (
    <table className="hover">
      <thead>
      <tr>
        <th>id</th>
        <th>scotter</th>
        <th>model</th>
        <th>battery</th>
      </tr>
      </thead>
      <tbody>
        {scooters.map(scooter =>
          <ScootterListItem key={ scooter.id } scooter={ scooter } />
        )}
      </tbody>
    </table>
  );
}