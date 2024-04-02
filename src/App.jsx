import './App.css'; // Archivo de estilos CSS
import React from 'react';
import RoutesApp from './routes/RoutesApp';
import { ButtonProvider, useTheme } from './themes/ThemeContext';
import Themeselector from './components/Button';

const App = () => {
  return (
    <ButtonProvider>
      <AppContent />
    </ButtonProvider>
  );
};

const AppContent = () => {
  const { theme } = useTheme();

  return (
    <section className={`App ${theme}`}>
      <Themeselector />
      <RoutesApp />
    </section>
  );
};


export default App;
