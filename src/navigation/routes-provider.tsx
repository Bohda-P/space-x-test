import { Navigate, Route, Routes } from 'react-router-dom';
// Pages
import { Favorites, Home } from '../pages';

export const RoutesProvider = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/favorites" element={<Favorites />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);
