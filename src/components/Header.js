import PropTypes from "prop-types";


const Header = ({ title }) => {
  return (
    <header className="header">
      <h1 style={{textAlign:"center"}}>{title}</h1>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

// CSS in JS
// const headingStyle = {
//   color: "red",
//   textAlign: "center",
// };

export default Header;
