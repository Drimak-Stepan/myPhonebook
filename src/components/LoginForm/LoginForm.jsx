import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/authOperations';
import { Form, Label, Input, Btn } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label htmlFor="emailId">Email</Label>
      <div>
        <Input type="email" name="email" id="emailId" />
      </div>
      <Label htmlFor="passwordId">Password</Label>
      <div>
        <Input type="password" name="password" id="passwordId" />
      </div>
      <Btn type="submit">Log In</Btn>
    </Form>
  );
};
