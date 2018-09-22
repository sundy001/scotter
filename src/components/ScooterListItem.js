import React from "react";

export default function ScootterListItem({ scooter: { id, license_plate, model, energy_level } }) {
  return (
    <tr>
      <td>{ id }</td>
      <td>{ license_plate }</td>
      <td>{ model }</td>
      <td>{ energy_level }</td>
    </tr>
  )
}