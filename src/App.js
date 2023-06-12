import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Footer from './components/Footer';
import AllCustomers from './components/AllCustomers';
import Transactions from './components/Transactions';
import TransferFunds from './components/TransferFunds';
// import { app, database } from './firebaseConfig';

function App() {
  return (
    <BrowserRouter>

      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Services />} />
          <Route path="/allCustomers" element={<AllCustomers />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/moneyTransfer" element={<TransferFunds />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
