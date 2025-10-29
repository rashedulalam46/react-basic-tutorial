import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Header from './Pages/Header';
import Footer from './Pages/Footer';
import Props from './Pages/Props';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Props email="contact1@example.com" phone="123-456-7891" order="1" />
      <Props email="contact2@example.com" phone="123-456-7892" order="2" />
      <Footer />
    </div>
  );
}

export default App;
