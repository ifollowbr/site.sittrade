import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';
import CasesPage from '../pages/CasesPage';
import HomePage from '../pages/HomePage';

const Router = () => {

    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path='/' element={<HomePage />}/>
                <Route path='/cases' element={<CasesPage />} />
                <Route path='*' element={<Navigate to='/' />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;