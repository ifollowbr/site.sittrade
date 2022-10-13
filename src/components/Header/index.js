import { HeaderContainer } from './styles';
import SittradeLogo from '../../assets/logo-sit.svg';
import Menu from '../../assets/menu.svg';
import { useState } from 'react';
import ModalHeaderNav from '../ModalHeaderNav';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [navModalOpened, setNavModalOpened] = useState(false);
    const navigate = useNavigate();

    return (
        <HeaderContainer>
            <img onClick={() => navigate('/')} src={SittradeLogo} alt='logo'/>
            <div className='menu-container' onClick={() => setNavModalOpened(true)}>
                <p>NAVEGUE</p>
                <img src={Menu} alt='menu'/>
            </div>
            {navModalOpened && <ModalHeaderNav setCloseModal={setNavModalOpened}/>}
        </HeaderContainer>
    )
}

export default Header;