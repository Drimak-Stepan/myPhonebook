import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { signup } from '../../redux/auth/authOperations';
import useAuth from '../../hooks/useAuth';
import { Form, Label, Input, Btn } from './RegisterForm.styled';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import toast from 'react-hot-toast';

export const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { isError } = useAuth();
  const dispatch = useDispatch();

  const handleChange = () => {
    if (showPassword) {
      return setShowPassword(false);
    }
    setShowPassword(true);
  };

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

    if (isError.status === 400) {
      return toast(
        `Such a user already exists, please enter other data for registration`,
        { style: { color: '#1976d2' } }
      );
    }

    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <div>
        <Label htmlFor="nameId">Username</Label>
        <div>
          <Input type="text" name="name" id="nameId" />
        </div>
        <Label htmlFor="emailId">Email</Label>
        <div>
          <Input type="email" name="email" id="emailId" />
        </div>
        <Label htmlFor="pasId">Password</Label>
        <div style={{ position: 'relative' }}>
          <Input
            type={!showPassword ? 'password' : 'text'}
            name="password"
            id="pasId"
          />
          {!showPassword ? (
            <FiEyeOff
              style={{ position: 'absolute', top: 18, right: 10 }}
              onClick={handleChange}
            />
          ) : (
            <FiEye
              style={{ position: 'absolute', top: 18, right: 10 }}
              onClick={handleChange}
            />
          )}
        </div>
        <Btn type="submit">Register</Btn>
      </div>
    </Form>
  );
};
