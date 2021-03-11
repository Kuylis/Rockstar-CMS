import Navbar from '../Navbar/Navbar';
import './Header.scss';

const Header = () => {
    return (
        <div className='Header'>
            <div className='Header_logo'>
                <img src='https://kodify.se/_files/200000055-1136111363/200/B3%20Kodify_Positiv.png' alt='B3 kodify logo'></img>
            </div>
            <div className='Header_navbar'>
                <Navbar />
            </div>
        </div>
    )
}

export default Header
