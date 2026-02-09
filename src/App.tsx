
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Reservations from './pages/Reservations';
import PrivateEvents from './pages/PrivateEvents';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';



function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/menus" element={<Menu />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/private-events" element={<PrivateEvents />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
