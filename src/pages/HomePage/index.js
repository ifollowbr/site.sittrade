import Footer from '../../components/Footer';
import Header from "../../components/Header";
import Home from '../../components/Home';
import { HomePageContainer } from "./styles";

const HomePage = () => {

    return (
        <HomePageContainer>
            <Header />
            <Home />
            <Footer />
        </HomePageContainer>
    )
};

export default HomePage;