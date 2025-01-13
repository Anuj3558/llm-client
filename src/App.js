import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/home/HomePage';
import { LoginPage } from './pages/Login/Login';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import LearnMorePage from './components/LearnMore';

function App() {
  return (
    <Router>
        <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/learn-more" element={<LearnMorePage />} />
      </Routes>
<Footer />

    </Router>
  );
}

export default App;