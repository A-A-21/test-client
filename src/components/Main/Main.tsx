import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
      }}
    >
      HELLO MY MAIN PAGE
      <Link to="/form">FORM</Link>
      <Link to="/list">LIST</Link>
    </div>
  );
};

export default Main;
