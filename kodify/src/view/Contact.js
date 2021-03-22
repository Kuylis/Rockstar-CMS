import { Helmet } from 'react-helmet-async';
import Map from '../components/component/Map';
import FormContact from '../components/FormContact';


const Contact = () => {
    return (
        <div>
          <Helmet>
            <title>Konsultbolag i Malmö- Vi är Sveriges bästa Konsultbolag kodify.se</title>
          </Helmet>
          <Map />
          <FormContact />
        </div>
    )
}

export default Contact;
