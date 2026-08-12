import { area } from "framer-motion/client";
import "../Stylesheet.css";
import { useState, useMemo, useRef, useEffect } from "react";

const Footer = () => {
  return (
    <>
    <div className="footer">
      <div className="footer-item" style={{gridArea: "box-1"}}></div>
      <div className="footer-item center" style={{gridArea: "box-2"}}>
        <div>
          Get in contact with me at: <a href="mailto:KjeldS2005@gmail.com">KjeldS2005@gmail.com</a><br/>
          Find my GitHub at: <a href="https://github.com/k-s-0-5">@k-s-0-5</a>
        </div>
        <div>
          2026
        </div>
      </div>
      <div className="footer-item" style={{gridArea: "box-3"}}></div>
    </div>
    </>
  );
};

export default Footer;
