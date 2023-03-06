import { Helmet } from 'react-helmet';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <div style={styles.container}>
        <h1 style={styles.title}>
          This app helps you create and save all your precious contacts!
        </h1>
      </div>
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
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};
