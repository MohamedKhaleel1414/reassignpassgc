import "../style/form-style.css";
import logo from "../assets/logo.png";

function Sent() {
  return (
    <>
      <div className="container">
        <div className="brand-logo">
          <img src={logo} className="logo" alt="logo"></img>
        </div>
        <div className="sentmessage">Password Updated Successfully</div>
      </div>
    </>
  );
}

export default Sent;
