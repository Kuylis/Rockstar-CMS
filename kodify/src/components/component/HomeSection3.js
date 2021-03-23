import '../../scss/main.scss';

import { Link } from 'react-router-dom';


const HomeSection3 = () => {
    return (
        <div className="homeSection__container">
          <div className="homeSection3__text">
            <h2>Våra tjänster</h2>
            <p>Vi levererar konsulter till våra kunder i form av enstaka experter som stärker upp ert utvecklings-team, alternativt kan
            vi leverera ett komplett DevOps-team som kan hjälpa er att spara tid och pengar genom att utföra jobbet snabbt och med hög kvalité.</p>
          </div>
          <div className="cards__container">
            <div className="homeSection3__cards">
              <div className="card__container">
                <div className="icon__container">
                  <i className="fas fa-users"></i>
                </div>
                <div className="card__title">
                  <h3>DevOps-Team</h3>
                </div>
              </div>
            </div>
            <div className="homeSection3__cards">
              <div className="card__container">
                <div className="icon__container">
                  <i className="fas fa-cloud"></i>
                </div>
              </div>
            </div>
            <div className="homeSection3__cards">
              <div className="card__container">
                <div className="icon__container">
                  <i className="fas fa-user"></i>
                </div>
              </div>
            </div>
        </div>
        <div className="homeSection__image">
            <img src="/assets/Ny_webb_4.jpeg.jpg" width="1920" height="1080" alt="workplace" />
        </div>
      </div>
    )
}

export default HomeSection3
