import { BodyContainer, HeaderContainer, ModalHeaderNavContainer } from './styles';
import { Link, useNavigate } from 'react-router-dom';
import SittradeLogo from '../../assets/logo-sit.svg';
import InstagramBranco from '../../assets/instagram-branco.svg';
import LinkedinBranco from '../../assets/linkedin-branco.svg';
import Fechar from '../../assets/fechar.svg';
import TrioCirculoFundoPreto from '../../assets/trio-circulo-fundopreto.svg';
import { useEffect } from 'react';

const ModalHeaderNav = ({setCloseModal}) => {
    const navigate = useNavigate();

    useEffect(() => {
        const cacheImages = async (srcArray) => {
            const promises = await srcArray.map((src) => {
                return new Promise(function (resolve, reject) {
                    const img = new Image();
        
                    img.src = src;
                    img.onload = resolve();
                    img.onerror = reject();
                });
            });
        
            await Promise.all(promises);
        };

        const imgs = [
            SittradeLogo,
            InstagramBranco,
            LinkedinBranco,
            Fechar,
            TrioCirculoFundoPreto,
        ];

        cacheImages(imgs);
    },[]);

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
                    <img src={TrioCirculoFundoPreto} alt='círculos'/>
                </figure>
                <nav>
                    <Link to='/' onClick={() => setCloseModal(false)}>Home</Link>
                    <a href='/#quem-somos' onClick={() => setCloseModal(false)}>Quem Somos</a>
                    <a href='/#oque-fazemos' onClick={() => setCloseModal(false)}>O que fazemos</a>
                    <Link to='cases' onClick={() => setCloseModal(false)}>Cases</Link>
                </nav>
            </BodyContainer>
        </ModalHeaderNavContainer>
    );
};

export default ModalHeaderNav;