import PropTypes from "prop-types";
import css from "./FriendList.module.css";
const OneFriend = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <span className={isOnline ? css.online : css.offline}></span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};
OneFriend.defaultProps = {
  isOnline: false,
  avatar:
    "https://cdn.pixabay.com/photo/2020/12/10/10/17/jasper-national-park-5819878_1280.jpg",
};

OneFriend.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
};
export default OneFriend;
