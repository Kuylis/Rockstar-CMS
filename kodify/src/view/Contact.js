import { Helmet } from 'react-helmet-async';
import Map from '../components/component/Map';
import FormContact from '../components/component/FormContact';
import '../scss/main.scss';



const Contact = () => {
    return (
        <div>
          <Helmet>
            <title>Konsultbolag i Malmö- Vi är Sveriges bästa Konsultbolag kodify.se</title>
          </Helmet>
          <div className='contact__outerContainer'>
            <div className='contact__innerContainer'>
              <div className='contact__form'>
                <FormContact />
              </div>
              <div className='contact__map'>
                <Map />
              </div>
            </div>
        </div>
      </div>
    )
}

export default Contact;
