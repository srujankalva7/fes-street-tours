export default function Payment() {
    return (
      <main>
        <section className="booking-hero">
          <p className="eyebrow">Payment</p>
          <h1>Complete your booking</h1>
          <p>
            Pay your deposit to reserve your Fes tour. We’ll confirm the guide,
            meeting point, and final details by email or WhatsApp.
          </p>
        </section>
  
        <section className="booking-layout">
          <div className="booking-info">
            <h2>Booking Summary</h2>
            <p>Tour: Fes Medina Walking Tour</p>
            <p>Deposit: $20</p>
            <p>Remaining balance can be paid in person.</p>
          </div>
  
          <div className="booking-form">
            <h2>Secure payment</h2>
            <p>Use the button below to pay through Stripe.</p>
  
            <a className="button dark" href="YOUR_STRIPE_PAYMENT_LINK">
              Pay Deposit
            </a>
          </div>
        </section>
      </main>
    );
  }