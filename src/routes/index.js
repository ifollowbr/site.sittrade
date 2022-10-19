import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import CasesPage from '../pages/CasesPage';
import HomePage from '../pages/HomePage';

const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />}/>
                <Route path='/cases' element={<CasesPage />} />
                <Route path='*' element={<Navigate to='/' />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;