export default function Button({ onClick, children, type = "button", ...props }) {
    return (
      <button type={type} onClick={onClick} {...props} className="btn">
        {children}
      </button>
    );
  }