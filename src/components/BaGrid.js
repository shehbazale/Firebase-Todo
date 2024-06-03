import React from "react";

const BaGrid = (props) => {
  const { datasource } = props;
  return (
    <>
      <ul>
        {datasource && datasource.length > 0
          ? datasource.map((row, ind) => <li key={ind}>{row}</li>)
          : null}
      </ul>
    </>
  );
};

export default BaGrid;
