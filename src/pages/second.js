import React from "react";

function Second() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "3fr 1fr",
        gridTemplateRows: "20vh 70vh 10vh",
        gridTemplateAreas: `'h h'
                            'm a'
                            'f f'`,
      }}
    >
      <header
        style={{
          backgroundColor: "yellow",
          gridArea: `h`,
        }}
      >
        with grid template areas
      </header>
      <main
        style={{
          backgroundColor: "blue",
          gridArea: `m`,
        }}
      ></main>
      <aside
        style={{
          backgroundColor: "green",
          gridArea: `a`,
        }}
      ></aside>
      <footer
        style={{
          backgroundColor: "red",
          gridArea: `f`,
        }}
      ></footer>
    </div>
  );
}

export default Second;
