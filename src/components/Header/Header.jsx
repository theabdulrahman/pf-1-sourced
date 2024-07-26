import { userName } from "../../portfolio";
import Navbar from "../Navbar/Navbar";
import "./Header.css";

const Header = () => {
  const { homepage, title } = userName.header;

  return (
    <header className='header center'>
      <h3>
        {homepage ? (
          <a
            href={homepage}
            className='link'>
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      <Navbar />
    </header>
  );
};

export default Header;
