import { ThemeProvider } from './hooks/useTheme';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Background3D from './components/Background3D';

function App() {
  return (
    <ThemeProvider>
      <Background3D />
      <div className="app" style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
