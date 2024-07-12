import React from 'react'
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import Layout from './components/Layout';
import dark from './styles/themes/dark';
import Dashboard from './pages/Dashboard';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
        <GlobalStyles/>
        <Layout>
          <Dashboard />
        </Layout>
    </ThemeProvider>
  )
}

export default App;