import './App.css';
import Profile from './components/Profile';

import Footer from './components/Footer';
import Links from './components/Links';
import Socials from './components/Socials';

function App() {
  return (
    <>
      <div className="app">
        <Profile />
        <Links />
        <Socials />
      </div>
      <Footer />
    </>
  );
}

export default App;
