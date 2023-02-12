import Header from "./components/Header";
import Content from "./components/Content";
import data from "./data";

function App() {
  const contentData = data.map((item, i) => (
    <div key={item.id}>
      <Content {...item} />
      {i === data.length - 1 ? null : <hr />}
    </div>
  ));

  return (
    <div className="App">
      <Header />
      <main className="location">{contentData}</main>
    </div>
  );
}

export default App;
