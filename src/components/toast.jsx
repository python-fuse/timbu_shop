"use client";

import { useEffect, useState } from "react";

const Toast = ({ message, onClose }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onClose, 300);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed top-0 right-0 mt-4 mr-4 w-64 bg-blue-500 text-white rounded shadow-lg p-4 transform transition-transform duration-300 ease-in-out ${
        show ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {message}
    </div>
  );
};

export default Toast;
