import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/authOperations';
import useAuth from '../../hooks/useAuth';
import { Wrapper, Username, Btn } from './UserMenu.styled';
import { FiLogOut } from 'react-icons/fi';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <Username>Welcome, {user.name}</Username>
      <Btn type="button" onClick={() => dispatch(logout())}>
        <FiLogOut />
      </Btn>
    </Wrapper>
  );
};
