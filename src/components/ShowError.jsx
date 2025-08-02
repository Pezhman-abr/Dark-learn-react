// components/Toast.jsx
import "./toast.css";

export default function Toast({ type = "info", message }) {
  return (
    <div className={`toast ${type}`}>
      <span>{message}</span>
    </div>
  );
}
