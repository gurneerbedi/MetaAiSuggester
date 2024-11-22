import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import MetaIcon from "../../assets/meta.svg";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src={MetaIcon} width={50} alt="" />
      </Link>
      <nav className="header__nav">
        <Link to="/" className="header__link">
          Home
        </Link>
        <Link to="/quiz" className="header__link">
          Quiz
        </Link>
      </nav>
    </header>
  );
}
