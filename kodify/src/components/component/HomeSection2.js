import '../../scss/main.scss';


const HomeSection2 = () => {
    return (
        <div className="homeSection__container">
            <div className="homeSection2__text">
                <h2>Vilka är vi</h2>
                <p>Vi är ett konsultbolag inom IT och vi jobbar med de senaste teknikerna inom systemutveckling och management.
                Vi arbetar enligt metoden DevOps och har kompetens inom de 3 stora Cloud-plattformarna Azure, AWS och GCP.</p>
            </div>
            <div className="homeSection__image">
                <img src="/assets/Ny_webb_3.jpeg.jpg" width="1920" height="1080" alt="workplace" />
            </div>
        </div>
    )
}

export default HomeSection2
