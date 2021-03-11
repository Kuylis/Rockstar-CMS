import Header from '../components/common/Header/Header';
import { Helmet } from 'react-helmet-async';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Konsultbolag i Malmö inom DevOps, Cloud och Management- kodify kodify.se</title>
            </Helmet>
            <Header />
        </div>
    )
}

export default Home
