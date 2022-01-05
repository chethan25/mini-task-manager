import Navbar from './components/Navbar';
import MainSection from './components/MainSection';

import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="header-container">
        <h1 className="header-title">Dashboard</h1>
      </header>
      <div className="section-container">
        <Navbar />
        <MainSection />
      </div>
    </div>
  );
}

export default App;
