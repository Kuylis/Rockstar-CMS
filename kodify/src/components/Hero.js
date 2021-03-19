import '../scss/Main.scss';


const Hero = () => {
    return (
        <div className='hero__container'>
            <video src='/assets/b3video.mp4' autoPlay loop muted />
            <h1>Välkommen till B3 Kodify</h1>
        </div>
    )
}

export default Hero
