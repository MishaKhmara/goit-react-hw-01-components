import PropTypes from "prop-types";
import css from "./Statistical.module.css";
const Sitem = ({ label, percentage }) => {
  return (
    <li className={css.item}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
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
