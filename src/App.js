import { Routes, Route } from 'react-router-dom';
import { Contact, Home } from './pages';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
