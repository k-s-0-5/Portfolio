import "../Stylesheet.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-item" style={{ gridArea: "box-1" }}></div>
        <div className="footer-item" style={{ gridArea: "box-2" }}>
          {/* <p>
          Get in contact with me at: <a href="mailto:KjeldS2005@gmail.com">KjeldS2005@gmail.com</a><br/>
          Find my GitHub at: <a href="https://github.com/k-s-0-5">@k-s-0-5</a>
        </p> */}
          {/* <p>
          2026
        </p> */}
        </div>
        <div className="footer-item" style={{ gridArea: "box-3" }}></div>
      </footer>
    </>
  );
};

export default Footer;
