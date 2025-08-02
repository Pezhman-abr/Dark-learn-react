// context/ToastContext.jsx
import { createContext, useContext, useState } from "react";
import Toast from "../components/ShowError"; // کامپوننت نمایش پیام

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState(null);

  const showToast = (type, message) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 4000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast && <Toast type={toast.type} message={toast.message} />}
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
