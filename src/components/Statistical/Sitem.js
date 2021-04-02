import PropTypes from "prop-types";
const Sitem = ({ label, percentage }) => {
  return (
    <li>
      <span>{label}</span>
      <span>{percentage}%</span>
    </li>
  );
};

Sitem.defaultProps = {
  label: ".jpg",
  percentage: 0,
};

Sitem.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default Sitem;
