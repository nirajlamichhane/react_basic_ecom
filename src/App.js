// import logo from './logo.svg';
import "./App.css";
import DiscoverProduct from "./Component/DiscoverProduct";
import Header from "./Component/HeaderComponent/Header";
import SimpleServiceDescription from "./Component/SimpleServiceDescription";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <DiscoverProduct/>
        <SimpleServiceDescription/>
      </div>
    </div>
  );
}

export default App;
