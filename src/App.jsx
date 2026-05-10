import { ThemeProvider } from './hooks/useTheme';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Navbar />
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
