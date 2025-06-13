import Home from "./Home";
import "./Home.css";

const App = () => {
  let a = 10000;

  const colors = ["red", "orange", "purple", "green", "skyblue"];
  const shoes = ["Nike", "Adidas", "Puma", "Redtap"];

  function mul() {
    return 12 * 2;
  }

  return (
    <div className="app-container">
      <h1 style={{ color: "blue", fontSize: "28px", textAlign: "center", marginBottom: "20px" }}>
        Hello Dear 👋
      </h1>

      <Home a={a} mul={mul} colors={colors} shoes={shoes} />zz
    </div>
  );
};

export default App;
