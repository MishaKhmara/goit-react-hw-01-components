import React from "react";
import Sitem from "./Sitem";
import PropTypes from "prop-types";

export default function Statistics({ title, stats }) {
  return (
    <div>
      <section>
        <h2>{title}</h2>

        <ul>
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
