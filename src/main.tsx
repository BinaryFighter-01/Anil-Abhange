
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Remove all light mode code and always use dark mode
document.documentElement.classList.remove('light-mode');

createRoot(document.getElementById("root")!).render(<App />);
