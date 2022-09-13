import PropTypes from 'prop-types';
import css from './FriendList.module.css'

export default function FriendListItem({ id, avatar, name, isOnline }) {

  return (
    <li className={css.item} key={id}>
      <span className={`${css.status} ${isOnline ? css.online : css.offline}`} >{isOnline}</span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  )
}

FriendListItem.propTypes = {
    id: PropTypes.number,
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
}