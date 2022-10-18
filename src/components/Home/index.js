import { useEffect, useState } from 'react';
import { CasesContainer, ClientesContainer, HomeContainer, HomeTopoContainer, OqueFazemosContainer, QuemSomosContainer } from './styles';
import TrioCirculoFundoPreto from '../../assets/trio-circulo-fundopreto.svg';
import TrioCirculoFundoBranco from '../../assets/trio-circulo-fundobranco.svg';
import SetaBaixo from '../../assets/seta-baixo.svg';
import imagem1 from '../../assets/imagem1.png';
import imagem2 from '../../assets/imagem2.png';
import imagem3 from '../../assets/imagem3.png';
import imagem4 from '../../assets/imagem4.png';
import imagem5 from '../../assets/imagem5.png';
import IconeCriacaoPlanejamento from '../../assets/icone-criação-planejamento.svg';
import IconeProducao from '../../assets/icone-produção.svg';
import IconeLogistica from '../../assets/icone-logistica.svg';
import IconeGestaoAcompanhamento from '../../assets/icone-gestão-acompanhamento.svg';
import Mapa from '../../assets/mapa.svg';
import { Link } from 'react-router-dom';
import Beats from '../../assets/beats.png';
import Beats1 from '../../assets/beats-1.png';
import CinturaoBud from '../../assets/cinturao-bud.png';
import Colorado from '../../assets/colorado.png';
import Guarana from '../../assets/guarana.png';
import Guarana1 from '../../assets/guarana-1.png';
import Hoegaarden from '../../assets/hoegaarden.png';
import Pepsi from '../../assets/pepsi.png';
import Redbull from '../../assets/redbull.png';
import Vivant from '../../assets/vivant.png';

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);

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

            setIsLoading(false);
        };

        const imgs = [
            'https://istockblobs.blob.core.windows.net/sitesittrade/fundo-inicio.webp',
            TrioCirculoFundoPreto,
            TrioCirculoFundoBranco,
            SetaBaixo,
            imagem1,
            imagem2,
            imagem3,
            imagem4,
            imagem5,
            IconeCriacaoPlanejamento,
            IconeProducao,
            IconeLogistica,
            IconeGestaoAcompanhamento,
            Mapa,
            Beats,
            Beats1,
            CinturaoBud,
            Colorado,
            Guarana,
            Guarana1,
            Hoegaarden,
            Pepsi,
            Redbull,
            Vivant,
        ];

        cacheImages(imgs);
    },[]);

    return (
        <HomeContainer>
            {isLoading && <div className='loading'>Loading</div>}
            <HomeTopoContainer>
                <div className='body'>
                    <figure>
                        <img src={TrioCirculoFundoPreto} alt='circulos'/>
                    </figure>
                    <div>
                        <p>soluções</p>
                        <p>inteligentes</p>
                        <p>em<strong>trade</strong></p>
                        <p>MKT</p>
                    </div>
                    <figure>
                        <img src={TrioCirculoFundoPreto} alt='circulos'/>
                    </figure>
                </div>
                <div className='saiba-mais-container'>
                    <p>Conheça a <strong>melhor solução</strong> para o seu negócio</p>
                    <figure>
                        <img src={SetaBaixo} alt='seta'/>
                    </figure>
                </div>
            </HomeTopoContainer>
            <QuemSomosContainer>
                <div className='description-container'>
                    <img src={TrioCirculoFundoBranco} alt='círculos'/>
                    <h2>
                        Quem
                        <span>somos?</span>
                    </h2>
                    <p>
                        Temos em nosso DNA a <strong>experiência de mais de 20 anos na produção de materiais promocionais.</strong> Desta forma, 
                        montamos uma equipe multidisciplinar e oferecemos um trabalho diferenciado no gerenciamento de criação, 
                        produção e distribuição destes materiais.           
                    </p>
                </div> 
                <p>Nossa equipe pode te ajudar na <strong>solução completa ou em algumas etapas do processo.</strong></p>
                <div className='images-container'>
                    <figure>
                        <img src={imagem1} alt='case'/>
                    </figure>
                    <figure>
                        <img src={imagem2} alt='case'/>
                    </figure>
                    <figure>
                        <img src={imagem3} alt='case'/>
                    </figure>
                    <figure>
                        <img src={imagem4} alt='case'/>
                    </figure>
                    <figure>
                        <img src={imagem5} alt='case'/>
                    </figure>
                </div>
            </QuemSomosContainer>
            <OqueFazemosContainer>
                <div className='oque-fazemos-container'>
                    <img src={TrioCirculoFundoBranco} alt='círculos'/>
                    <h2>
                        O que
                        <span>fazemos</span>
                    </h2>
                    <p>
                        O nosso principal objetivo é <strong>agregar valor às marcas</strong> que atendemos, 
                        com muita competitividade, confiabilidade, transparência e custos adequados.
                    </p>
                </div>
                <div className='itens-container'>
                    <div className='item'>
                        <h3>Criação e Planejamento</h3>
                        <div>
                            <img src={IconeCriacaoPlanejamento} alt='criação'/>
                            <p>
                                Temos uma equipe capacitada para auxiliar nossos clientes no momento de criação e briefing inicial do job. 
                                Nossa intenção é conseguir contribuir com o projeto desde o primeiro passo.
                            </p>
                        </div>
                    </div>
                    <div className='item'>
                        <h3>Produção</h3>
                        <div>
                            <img src={IconeProducao} alt='produção'/>
                            <p>
                                Nosso know-how permite oferecer ao cliente as opções mais interessantes, 
                                tanto em termos financeiros, quanto em inovação. 
                                Acompanhamos a produção do início ao fim.
                            </p>
                        </div>
                    </div>
                    <div className='item'>
                        <h3>Logística</h3>
                        <div>
                            <img src={IconeLogistica} alt='logística'/>
                            <p>
                                Atendemos todo o Brasil com excelência. Trabalhamos com modais rodoviários, 
                                dedicados e aéreos para garantir que o material seja entregue no prazo necessário.
                            </p>
                        </div>
                    </div>
                    <div className='item'>
                        <h3>Gestão e acompanhamento</h3>
                        <div>
                            <img src={IconeGestaoAcompanhamento} alt='gestão'/>
                            <p>
                                Através da nossa ferramenta de gestão <Link>iFollow</Link>, fechamos nossa cadeia de atendimento 360. 
                                O cliente possui visibilidade real time de todas as suas entregas e positivações.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='map-container'>
                    <figure>
                        <img src={Mapa} alt='mapa'/>
                    </figure>
                    <section>
                        <h2>
                            Atendemos todo o Brasil com <strong>agilidade <span>&</span> qualidade</strong>
                        </h2>
                        <p>
                            Além da nossa estrutura própria em São Paulo, possuímos bases e parceiros nas principais capitais do país, 
                            garantindo uma grande capilaridade de produção e redução nos custos de distribuição de materiais. 
                        </p>
                    </section>
                </div>
            </OqueFazemosContainer>
            <CasesContainer>
                <h1>Cases</h1>  
                <p>Nós temos a <strong>solução</strong> para o seu negócio!</p>
                <div className='images-container'>
                    <img src={TrioCirculoFundoBranco} alt='circulos'/>
                    <div>
                        <figure style={{gridArea: 'guarana'}}>
                            <img src={Guarana} alt='case guaraná'/>
                        </figure>
                        <figure style={{gridArea: 'guarana1'}}>
                            <img src={Guarana1} alt='case guaraná'/>
                        </figure>
                        <figure style={{gridArea: 'hoegaarden'}}>
                            <img src={Hoegaarden} alt='case hoegaarden'/>
                        </figure>
                        <figure style={{gridArea: 'pepsi'}}>
                            <img src={Pepsi} alt='case pepsi'/>
                        </figure>
                        <figure style={{gridArea: 'colorado'}}>
                            <img src={Colorado} alt='case colorado'/>
                        </figure>
                        <figure style={{gridArea: 'vivant'}}>
                            <img src={Vivant} alt='case vivant'/>
                        </figure>
                        <figure style={{gridArea: 'beats1'}}>
                            <img src={Beats1} alt='case beats'/>
                        </figure>
                        <figure style={{gridArea: 'bud'}}>
                            <img src={CinturaoBud} alt='cinturão budweiser'/>
                        </figure>
                        <figure style={{gridArea: 'redbull'}}>
                            <img src={Redbull} alt='case redbull'/>
                        </figure>
                        <figure style={{gridArea: 'beats'}}>
                            <img src={Beats} alt='case beats'/>
                        </figure>
                    </div>
                </div>
                <h2>Quer conhecer mais?</h2>
                <Link>Confira aqui todos os nossos cases!</Link>
            </CasesContainer>
            <ClientesContainer>
                <img src={TrioCirculoFundoPreto} alt='circulos'/>
                <h1>
                    Alguns de nossos
                    <strong>principais clientes</strong>
                </h1>
                <div>
                    <img alt='ambev'/>
                    <img alt='burgerking'/>
                    <img alt='redbull'/>
                </div>
            </ClientesContainer>
        </HomeContainer>
    );
};

export default Home;