import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/authOperations';
import useAuth from '../../hooks/useAuth';
import { Wrapper, Username } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <Username>Welcome, {user.name}</Username>
      <button type="button" onClick={() => dispatch(logout())}>
        Logout
      </button>
    </Wrapper>
  );
};
