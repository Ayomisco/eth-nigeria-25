import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.jsx'
import Aniversary from './pages/10th-aniversary.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/10th-aniversary" element={<Aniversary />} />
    </Routes>
  </BrowserRouter>,
)
