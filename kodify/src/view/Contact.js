import { Helmet } from 'react-helmet-async';
import FormContact from '../components/FormContact';

const Contact = () => {
    return (
        <div>
          <Helmet>
            <title>Konsultbolag i Malmö- Vi är Sveriges bästa Konsultbolag kodify.se</title>
          </Helmet>
          <FormContact />
        </div>
    )
}

export default Contact;
