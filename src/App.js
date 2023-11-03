import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Footer from './components/Footer';
import ViewCustomers from './components/ViewCustomers';
import TransHistory from './components/TransHistory';
import MoneyTransfer from './components/MoneyTransfer';
// import { app, database } from './firebaseConfig';

function App() {
  return (
    <BrowserRouter>

      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Services />} />
          <Route path="/allCustomers" element={<ViewCustomers />} />
          <Route path="/transactions" element={<TransHistory />} />
          <Route path="/moneyTransfer" element={<MoneyTransfer />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
