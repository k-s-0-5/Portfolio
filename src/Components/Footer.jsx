import { area } from "framer-motion/client";
import "../Stylesheet.css";
import { useState, useMemo, useRef, useEffect } from "react";

const Footer = () => {
  return (
    <>
    <footer className="footer">
      <div className="footer-item" style={{gridArea: "box-1"}}></div>
      <div className="footer-item" style={{gridArea: "box-2"}}>
        <p>
          Get in contact with me at: <span className="bright-text">KjeldS2005@gmail.com</span><br/>
          Find my GitHub at: <a href="https://github.com/k-s-0-5">@k-s-0-5</a>
        </p>
        <p>
          2026
        </p>
      </div>
      <div className="footer-item" style={{gridArea: "box-3"}}></div>
    </footer>
    </>
  );
};

export default Footer;
