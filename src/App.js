function App() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "3fr 1fr",
        gridTemplateRows: "20vh 70vh 10vh",
      }}
    >
      <header
        style={{
          backgroundColor: "yellow",
          gridColumnStart: "1",
          gridColumnEnd: "3",
        }}
      ></header>
      <main
        style={{
          backgroundColor: "blue",
          gridColumnStart: "1",
          gridColumnEnd: "2",
        }}
      ></main>
      <aside
        style={{
          backgroundColor: "green",
          gridColumnStart: "2",
          gridColumnEnd: "3",
        }}
      ></aside>
      <footer
        style={{
          backgroundColor: "red",
          gridColumnStart: "1",
          gridColumnEnd: "3",
        }}
      ></footer>
    </div>
  );
}

export default App;
