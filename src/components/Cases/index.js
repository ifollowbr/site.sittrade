import { useEffect } from 'react';
import TrioCirculoFundoBranco from '../../assets/trio-circulo-fundobranco.svg';
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
import { CasesContainer } from './styles';

const Cases = () => {

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
            TrioCirculoFundoBranco,
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
        <CasesContainer>
            <div className='fixed-container'>
                <img src={TrioCirculoFundoBranco} alt='círculos'/>
                <section>
                    <h1>Cases</h1>
                    <p>Nós temos a <strong>solução</strong> para o seu negócio!</p>
                    <span>Clique nas fotos e conheça mais.</span>
                </section>
            </div>
            <div className='images-container'>
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
        </CasesContainer>
    );
};

export default Cases;