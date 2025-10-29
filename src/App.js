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
      <Contact email="contact1@example.com" phone="123-456-7891" />
      <Contact email="contact2@example.com" phone="123-456-7892" />
      <Footer />
    </div>
  );
}

export default App;
