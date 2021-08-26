import React from 'react';

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

const HomeView = () => (
  <div style={styles.container}>
    <h2 style={styles.title}>
      PhoneBook Web App
      {/* <span role="img" aria-label="Иконка приветствия">💁‍♀️</span> */}
    </h2>
  </div>
);

export default HomeView;
