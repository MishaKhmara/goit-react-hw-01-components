import React from "react";
import Sitem from "./Sitem";
import PropTypes from "prop-types";
import css from "./Statistical.module.css";
export default function Statistics({ title, stats }) {
  return (
    <div>
      <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}

        <ul className={css.statList}>
          {stats.map((item) => (
            <Sitem key={item.id} {...item} />
          ))}
        </ul>
      </section>
    </div>
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
