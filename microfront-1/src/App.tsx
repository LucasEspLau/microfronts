// src/App.js en microfront-2

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/microfront-1/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
