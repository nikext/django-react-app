import { useEffect } from "react";
import "../styles/Alert.css";

function Alert({ message, type, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return <div className={`alert alert-${type}`}>{message}</div>;
}

export default Alert;
