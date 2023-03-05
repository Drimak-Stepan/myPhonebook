import { useDispatch } from 'react-redux';
import { signup } from '../../redux/auth/authOperations';
import { Form, Label, Input, Btn } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      signup({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label htmlFor="nameId">Username</Label>
      <div>
        <Input type="text" name="name" id="nameId" />
      </div>
      <Label htmlFor="emailId">Email</Label>
      <div>
        <Input type="email" name="email" id="emailId" />
      </div>
      <Label htmlFor="pasId">Password</Label>
      <div>
        <Input type="password" name="password" id="pasId" />
      </div>
      <Btn type="submit">Register</Btn>
    </Form>
  );
};
