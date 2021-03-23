import '../../../scss/main.scss';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';


const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [navbar, setNavbar] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 1075){
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
                {/* <div className='navbar__social-media'>
                    <Link to='https://www.linkedin.com/company/b3-kodify/'><i class="fab fa-linkedin-in"></i></Link>
                    <Link to='https://www.facebook.com/B3consulting.est2003'><i class="fab fa-facebook-f"></i></Link>
                    <Link to='https://www.instagram.com/b3_consulting/'><i class="fab fa-instagram"></i></Link>
                </div> */}
                <div className='navbar__container'>
                    <Link to='/'className='navbar__logo' onClick={closeMobileMenu}>
                        <img src='https://kodify.se/_files/200000055-1136111363/200/B3%20Kodify_Positiv.png' alt='B3 kodify logo' />
                    </Link>
                    <div className='navbar__menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                </div>
                <div className='nav__menu__container'>
                    <ul className={click ? 'nav__menu active' : 'nav__menu'}>
                        <li className='nav__item'>
                            <Link to='/' className='nav__links'>Hem</Link>
                        </li>
                        <li className='nav__item'>
                            <Link to='/jobba-pa-kodify/' className='nav__links' onClick={closeMobileMenu}>Karriär</Link>
                        </li>
                        <li className='nav__item'>
                            <Link to='/konsultbolag-malmo/' className='nav__links' onClick={closeMobileMenu}>Om oss</Link>
                        </li>
                        <li className='nav__item'>
                            <Link to='/kontakt/' className='nav__links' onClick={closeMobileMenu}>Kontakt</Link>
                        </li>
                        <li className='nav__item'>
                            <Link to='/nyheter' className='nav__links' onClick={closeMobileMenu}>Blogg</Link>
                        </li>
                        <li>
                            <Link to='/' className='nav__links__mobile' onClick={closeMobileMenu}>SIGN IN</Link>
                        </li>
                    </ul>
                    {button && <Button className='nav__sign-in-button'>SIGN IN</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar;
