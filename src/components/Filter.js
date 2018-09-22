import React from "react";

export default function Filter({ onModelChange, onMinChange, onMaxChange }) {
  return (
    <div>
      <form>
        <div className="grid-x">
          <div className="medium-3 cell">
            <label>Scooter Model
              <input type="text" onChange={ onModelChange } />
            </label>
          </div>
          <div className="medium-3 cell">
            <label>Batter Min
              <input type="text" onChange={ onMinChange } />
            </label>
          </div>
          <div className="medium-3 cell">
            <label>Batter Max
              <input type="text" onChange={ onMaxChange } />
            </label>
          </div>
        </div>
      </form>
    </div>
  )
}