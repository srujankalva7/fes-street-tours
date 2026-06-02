import { useNavigate } from "react-router-dom";
import { tours } from "../data/tours.js";

export default function BookingForm() {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/payment");
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      {/* keep the rest of your form the same */}

      <button className="button dark" type="submit">
        Continue to Payment
      </button>
    </form>
  );
}