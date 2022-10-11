import logo from './logo.svg';
import './App.css';
import Footer from "./components/Footer";
import AppRouter from "./config/router";

function App() {
  return (
    <div className="App">
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
