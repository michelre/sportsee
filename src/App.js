import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Score from './components/Score';
import SideBar from './components/SideBar';
import Dashboard from './Dashboard';

function App() {
  return (
    <Router>
      <div className='app-container'>
        <Header />
        <main>
          <SideBar />
          <Routes >
            <Route index element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
