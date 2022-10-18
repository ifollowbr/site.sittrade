import { useEffect, useState } from 'react';
import { HomeContainer, HomeTopoContainer, QuemSomosContainer } from './styles';
import TrioCirculoFundoPreto from '../../assets/trio-circulo-fundopreto.svg';
import TrioCirculoFundoBranco from '../../assets/trio-circulo-fundobranco.svg';
import SetaBaixo from '../../assets/seta-baixo.svg';
import imagem1 from '../../assets/imagem1.png';
import imagem2 from '../../assets/imagem2.png';
import imagem3 from '../../assets/imagem3.png';
import imagem4 from '../../assets/imagem4.png';
import imagem5 from '../../assets/imagem5.png';

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
            TrioCirculoFundoPreto,
            SetaBaixo,
            'https://istockblobs.blob.core.windows.net/sitesittrade/fundo-inicio.png',
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
        </HomeContainer>
    );
};

export default Home;