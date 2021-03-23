import { Helmet } from 'react-helmet-async';
import Hero from '../components/component/Hero';
import HomeSection1 from '../components/component/HomeSection1';
import HomeSection2 from '../components/component/HomeSection2';
import HomeSection3 from '../components/component/HomeSection3';
import HomeSection4 from '../components/component/HomeSection4';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Konsultbolag i Malmö inom DevOps, Cloud och Management- kodify kodify.se</title>
            </Helmet>
            <Hero />
            <HomeSection1 />
            <HomeSection2 />
            <HomeSection3 />
            <HomeSection4 />
        </div>
    )
}

export default Home;
