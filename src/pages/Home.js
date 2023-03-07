import { Helmet } from 'react-helmet';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme();
export default function Home() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: '100vh' }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={15}
            sx={{
              backgroundImage: 'url(https://source.unsplash.com/random)',
              backgroundRepeat: 'no-repeat',
              backgroundColor: t =>
                t.palette.mode === 'light'
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: 24,
              marginBottom: 5,
            }}
          >
            <Helmet>
              <title>Phonebook</title>
            </Helmet>
            <div style={styles.container}>
              <h1 style={styles.title}>
                This app helps you create and save all your precious contacts!
              </h1>
            </div>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 800,
    fontSize: 48,
    textAlign: 'center',
    backgroundColor: 'rgba(100%, 100%, 100%, 50%)',
  },
};
