import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Header from './Pages/Header';
import Footer from './Pages/Footer';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
