import './App.css';

import Navbar from './components/Nav/Navbar';
import Header from './components/Layout/Header';
import WhatsNew from './components/Layout/WhatsNew';
import Features from './components/Layout/Features';
import Footer from './components/Layout/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <WhatsNew />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
