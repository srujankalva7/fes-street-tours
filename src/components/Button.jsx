export default function Button({ children, variant = "dark", ...props }) {
    return (
      <button className={`button ${variant}`} {...props}>
        {children}
      </button>
    );
  }