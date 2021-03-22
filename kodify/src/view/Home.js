import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Konsultbolag i Malmö inom DevOps, Cloud och Management- kodify kodify.se</title>
            </Helmet>
            <Hero />
        </div>
    )
}

export default Home;
