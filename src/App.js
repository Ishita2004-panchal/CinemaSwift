import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './Home';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Login from './Login';
import Register from './Register';
import Umbaro from './Umbaro';
import Fatine from './Fatine';
import Kaashi from './Kaashi';
import Momtane from './Momtane';
import Theaters from './Theaters';
import SeatPage from './SeatPage';
import Billing from './Billing';
import Payment from './Payment';
import PageNotFound from './PageNotFound';
import axios from 'axios';


// ✅ New Layout component that uses `useLocation()`
function Layout() {
  const location = useLocation(); // ✅ Now it's inside <Router>

  return (
    <div className="App">
      {/* Hide Header only on PageNotFound */}
      {location.pathname == "*" && <Header /> && console.log(location.pathname)}
      {/* <Header /> */}
      <Routes>
        <Route path='/header' element={<Header />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/umbaro" element={<Umbaro />} />
        <Route path="/fatine" element={<Fatine />} />
        <Route path="/kaashi" element={<Kaashi />} />
        <Route path="/momtane" element={<Momtane />} />
        <Route path="/theater/:id" element={<Theaters />} />
        <Route path="/seatpage/:movieId" element={<SeatPage />} />
        <Route path="/billing/:movieId" element={<Billing />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout /> {/* ✅ Now useLocation() works because it's inside Router */}
    </Router>
  );
}

export default App;

