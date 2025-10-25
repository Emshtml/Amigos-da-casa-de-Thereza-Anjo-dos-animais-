import { useEffect } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const baseURL = "https://raw.githubusercontent.com/Emshtml/casa-thereza-anjo-dos-animais/main/public/animais/";
    const images = [
      "thor.jpg",
      "frida.jpg",
      "mia1.jpg",
      "mia2.jpg",
      "fiona1.jpg",
      "mia3.jpg"
    ];

    let index = 0;

    const changeBackground = () => {
      document.body.style.backgroundImage = `url(${baseURL + images[index]})`;
      index = (index + 1) % images.length;
    };

    changeBackground();
    const interval = setInterval(changeBackground, 10000);

    return () => clearInterval(interval);
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
