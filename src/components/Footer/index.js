import { FooterContainer } from './styles';
import LogoSittrade from '../../assets/logo-sit.svg';
import InstagramPreto from '../../assets/instagram.svg';
import LinkedinPreto from '../../assets/linkedin.svg';

const Footer = () => {

    return (
        <FooterContainer>
            <div className='body'>
                <div className='left'>
                    <h1>Quer se tornar <strong>referência</strong> no Trade Marketing?</h1>
                    <p>É só falar com a gente!</p>
                </div>
                <div className='right'>
                    <h1>Contato</h1>
                    <h2>Onde estamos</h2>
                    <p>Rua Jandiatuba, 630 – Conj. 430 Vila Andrade – São Paulo/SP</p>
                    <div>
                        <a target='_blank' rel="noreferrer" href="https://www.instagram.com/sittrademkt/">
                            <img src={InstagramPreto} alt='instagram' />
                        </a>
                        <a target='_blank' rel="noreferrer" href="https://br.linkedin.com/company/sittrade">
                            <img src={LinkedinPreto} alt='Linkedin' />
                        </a>
                    </div>
                </div>
            </div>
            <div className='footer'>
                <img src={LogoSittrade} alt='logo'/>
                <p>© 2022 SIT · Todos os direitos reservados.</p>
            </div>
        </FooterContainer>
    );
};

export default Footer;