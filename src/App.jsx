import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import BookTour from "./pages/BookTour.jsx";
import Payment from "./pages/Payment.jsx";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book-tour" element={<BookTour />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </>
  );
}