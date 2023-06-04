import { Routes, Route } from "react-router-dom";
import './App.css';
import ContentPage from './pages/content-page';
function App() {
  return (
    <Routes>
      <Route path='/' element={<ContentPage />} />
    </Routes>
  );
}

export default App;
