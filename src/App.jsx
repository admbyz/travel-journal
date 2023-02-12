import Header from "./components/Header";
import Content from "./components/Content";
import data from "./data";

function App() {
  const contentData = data.map((item) => <Content key={item.id} {...item} />);
  return (
    <div className="App">
      <Header />
      {contentData}
    </div>
  );
}

export default App;
