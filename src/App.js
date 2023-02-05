import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Dashboard from './Dashboard';

/**
 * Creates app component and routing with React Router
 * @returns display app component
 */
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
