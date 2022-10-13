import { BodyContainer, HeaderContainer, ModalHeaderNavContainer } from './styles';
import SittradeLogo from '../../assets/logo-sit.svg';
import { Link, useNavigate } from 'react-router-dom';
import InstagramBranco from '../../assets/instagram-branco.svg';
import LinkedinBranco from '../../assets/linkedin-branco.svg';
import Fechar from '../../assets/fechar.svg';
import TrioCirculoFundoPreto from '../../assets/trio-circulo-fundopreto.svg';

const ModalHeaderNav = ({setCloseModal}) => {
    const navigate = useNavigate();

    return (
        <ModalHeaderNavContainer>
            <HeaderContainer>
                <img onClick={() => navigate('/')} src={SittradeLogo} alt='logo'/>
                <div className='menu-container' onClick={() => setCloseModal(false)}>
                    <p>FECHAR</p>
                    <img src={Fechar} alt='fechar'/>
                </div>
            </HeaderContainer>
            <BodyContainer>
                <div className='contato'>
                    <h1>Contato</h1>
                    <h2>Onde estamos</h2>
                    <p>Rua Jandiatuba, 630 – Conj. 430 Vila Andrade – São Paulo/SP</p>
                    <div>
                        <a target='_blank' rel="noreferrer" href="https://www.instagram.com/sittrademkt/">
                            <img src={InstagramBranco} alt='instagram' />
                        </a>
                        <a target='_blank' rel="noreferrer" href="https://br.linkedin.com/company/sittrade">
                            <img src={LinkedinBranco} alt='Linkedin' />
                        </a>
                    </div>
                </div>
                <figure className='circulos'>
                    <img src={TrioCirculoFundoPreto} alt='circulos'/>
                </figure>
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/quem-somos'>Quem Somos</Link>
                    <Link to='/oque-fazemos'>O que fazemos</Link>
                    <Link to='cases'>Cases</Link>
                </nav>
            </BodyContainer>
        </ModalHeaderNavContainer>
    );
};

export default ModalHeaderNav;