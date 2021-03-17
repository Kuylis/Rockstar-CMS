import './Navbar.scss';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [navbar, setNavbar] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        } else {
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
    }, [])

    window.addEventListener('resize', showButton);

    const changeBackground = () => {
        console.log(window.scrollY)
        console.log(navbar)
        if(window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <>
            <nav className='navbar'  >
                <div className='navbar__container'>
                    <Link to='/'className='navbar__logo' onClick={closeMobileMenu}>
                        <img src='https://kodify.se/_files/200000055-1136111363/200/B3%20Kodify_Positiv.png' alt='B3 kodify logo' />
                    </Link>
                    <div className='nav__menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                </div>
                <ul className={click ? 'nav__menu--active' : 'nav__menu'}>
                    <li className='nav__item'>
                        <Link to='/' className='nav__links'>Hem</Link>
                    </li>
                    <li className='nav__item'>
                        <Link to='/jobba-pa-kodify/' className='nav__links' onClick={closeMobileMenu}>Jobba på Kodify</Link>
                    </li>
                    <li className='nav__item'>
                        <Link to='/konsultbolag-malmo/' className='nav__links' onClick={closeMobileMenu}>Om oss</Link>
                    </li>
                    <li className='nav__item'>
                        <Link to='/kontakt/' className='nav__links' onClick={closeMobileMenu}>Kontakt</Link>
                    </li>
                    <li className='nav__item'>
                        <Link to='/nyheter' className='nav__links' onClick={closeMobileMenu}>Blogg och nyheter</Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>SIGN IN</Button>}
                
            </nav>
        </>
    )
}

export default Navbar;
