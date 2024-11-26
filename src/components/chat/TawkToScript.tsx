"use client";

import { useEffect } from "react";

const TawkToScript = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/67169bce4304e3196ad53543/1iao5187g";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Rimuovi lo script quando il componente viene smontato
    };
  }, []);

  return null; // Questo componente non rende nulla
};

export default TawkToScript;
