import { CasesPageContainer } from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Cases from '../../components/Cases';

const CasesPage = () => {

    return (
        <CasesPageContainer>
            <Header />
            <Cases />
            <Footer />
        </CasesPageContainer>
    );
};

export default CasesPage;