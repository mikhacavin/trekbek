import React from "react";

export default function Counter({ numberOfItemsPacked, totalNumberOfItems }) {
  return (
    <p>
      <b>
        {numberOfItemsPacked} / {totalNumberOfItems}{" "}
      </b>{" "}
      items packed
    </p>
  );
}
