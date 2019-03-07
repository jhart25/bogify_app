import React from "react";
import "./style.css";

// With this file we will export the List and the listItem components

export function Song({ children }) {
  return (
      <div classname="list-fluid-container">
         <ul className="list-group">{children}</ul>
      </div>
  );
}

export function SongFeature({children}) {
    return <li className="list-group-item"></li>
}

