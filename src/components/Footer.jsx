import "./Footer.css";
const INSTAGRAM="https://www.instagram.com/therevphysio?stkn=MWJpazg5aGM1OTRrNw==";
function Footer(){return <footer className="footer">
 <div className="footer-container">
  <div className="footer-statement"><span>RECOVER.</span><span>REBUILD.</span><strong>REVOLUTIONIZE.</strong></div>
  <div className="footer-grid">
   <div className="footer-brand"><p>THE REVPHYSIO</p><h3>Better movement.<br/>Better recovery.<br/><em>Better living.</em></h3></div>
   <div className="footer-links"><p>NAVIGATE</p><a href="#home">Home</a><a href="#about">About</a><a href="#goals">Goals</a><a href="#services">Services</a><a href="#contact">Contact</a></div>
   <div className="footer-links"><p>CONNECT</p><a href="tel:+96176917602">+961 76 917 602</a><a href="https://wa.me/96176917602" target="_blank" rel="noreferrer">WhatsApp ↗</a><a href={INSTAGRAM} target="_blank" rel="noreferrer">Instagram ↗</a></div>
  </div>
  <div className="footer-bottom"><span>© {new Date().getFullYear()} REVPHYSIO</span><span>BY ALI FARHAT</span><a href="#home">BACK TO TOP ↑</a></div>
 </div>
 </footer>}
export default Footer;
