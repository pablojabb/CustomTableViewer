import { useEffect } from "react";

const KofiButton = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://storage.ko-fi.com/cdn/widget/Widget_2.js";
    script.type = "text/javascript";
    script.async = true;
    script.onload = () => {
      if (window.kofiwidget2) {
        window.kofiwidget2.init("Buy me a Ko-fi", "#a0c8f0", "L4L71BN453");
        window.kofiwidget2.draw();
      }
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="kofi-button" className="flex justify-center items-center">
      <a
        href="https://ko-fi.com/L4L71BN453"
        target="_blank"
        rel="noopener noreferrer"
        id="btn"
        className="bg-dark-m-btn  hover:bg-dark-m-btn-hover text-dark-content-text dark:text-dark-content-text font-bold py-2 px-4 rounded"
      >
       Buy me a ko-fi <span className="inline animate-pulse">☕</span>
      </a>
    </div>
  );
};

export default KofiButton;
