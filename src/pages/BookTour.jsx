import BookingForm from "../components/BookingForm.jsx";

export default function BookTour() {
  return (
    <main>
      <section className="booking-hero">
        <p className="eyebrow">Book your tour</p>
        <h1>Reserve a local Fes experience.</h1>
        <p>
          Send your preferred date, group size, and tour style. We’ll confirm
          availability, meeting point, and guide details.
        </p>
      </section>

      <section className="booking-layout">
        <div className="booking-info">
          <h2>What happens next?</h2>
          <p>1. You send your request.</p>
          <p>2. We confirm guide availability.</p>
          <p>3. You receive the meeting point and final details.</p>
        </div>

        <BookingForm />
      </section>
    </main>
  );
}