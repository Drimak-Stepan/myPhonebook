import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { signup } from '../../redux/auth/authOperations';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import toast from 'react-hot-toast';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link
        color="inherit"
        href="https://drimak-stepan.github.io/goit-react-hw-08-phonebook/"
      >
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const theme = createTheme();

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const handleChange = () => {
    if (showPassword) {
      return setShowPassword(false);
    }
    setShowPassword(true);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const status = await dispatch(
      signup({
        name,
        email,
        password,
      })
    );

    if (status.error && name && password && email) {
      return toast(`Please, enter other data for registration`, {
        style: { color: '#1976d2' },
      });
    }

    if (status.meta.requestStatus === 'fulfilled') {
      toast(`Registration success`, { style: { color: 'green' } });
      setEmail('');
      setName('');
      setPassword('');
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}></Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
            position="relative"
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  onChange={e => setPassword(e.target.value)}
                  value={password}
                  label="Password"
                  type={!showPassword ? 'password' : 'text'}
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              {!showPassword ? (
                <FiEyeOff
                  style={{
                    position: 'absolute',
                    bottom: 95,
                    right: 15,
                  }}
                  onClick={handleChange}
                />
              ) : (
                <FiEye
                  style={{ position: 'absolute', bottom: 95, right: 15 }}
                  onClick={handleChange}
                />
              )}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
};
