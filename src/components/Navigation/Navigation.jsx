import useAuth from '../../hooks/useAuth';
import { Link } from './Navigetion.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return <nav>{isLoggedIn && <Link to="/contacts">Contacts</Link>}</nav>;
};
