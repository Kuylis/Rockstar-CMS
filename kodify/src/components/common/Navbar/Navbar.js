import './Navbar.scss';

const Navbar = () => {
    return (
        <div className='Navbar'>
            <div className='Navbar_home Navbar--space'>
                <h3>Hem</h3>
            </div>
            <div className='Navbar_job Navbar--space'>
                <h3>Jobba på Kodify</h3>
            </div>   
            <div className='Navbar_about Navbar--space'>
                <h3>Om oss</h3>
            </div>
            <div className='Navbar_contact Navbar--space'>
                <h3>Kontakt</h3>
            </div>
            <div className='Navbar_BlogAndNews Navbar--space'>
                <h3>Blogg & Nyheter</h3>
            </div>
        
        </div>
    )
}

export default Navbar
