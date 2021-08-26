import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './default-avatar.svg';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  mail: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  // const name = useSelector(authSelectors.getUsername);
  const email = useSelector(authSelectors.getUsermail);

  const avatar = defaultAvatar;

  return (
    <div style={styles.container}>
      <img src={avatar} alt="" width="32" style={styles.avatar} />
      <span style={styles.mail}>{email}</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        {/* Log Out */}
        Выйти
      </button>
    </div>
  );
}
