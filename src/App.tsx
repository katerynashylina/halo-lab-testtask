import './App.scss';
import './styles/reset.scss';
import './styles/normalize.scss';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { GamePage } from './pages/GamePage/GamePage';
import { LogInPage } from './pages/LogInPage/LogInPage';

export const App = () => {
  return(
    <div className="page">
      <div className="page__container">
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/choose' element={<LogInPage />}/>
          <Route path='/game' element={<GamePage />}/>
        </Routes>
      </div>
    </div>
  );
}
