import { Link } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <Link to="/register">Sign Up</Link>
      <Link to="/login">Sign In</Link>
    </div>
  );
};
