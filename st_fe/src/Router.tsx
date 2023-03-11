import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Spinner from './components/Spinner';
import Login from './pages/Login/Login';
import MainPage from './pages/MainPage/MainPage';
import NotFound from './pages/NotFound/NotFound';

const Router = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Router;
