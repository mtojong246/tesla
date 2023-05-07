import './nav.styles.scss';
import Logo from '../../Images/tesla-logo-white.svg';

const Nav = () => {
    return (
        <div className='nav-bar-container'>
            <div className='nav-logo'>
                <img src={Logo} alt='tesla-logo' />
            </div>
            <div className='nav-option'>
                <span>Model S</span>
                <span>Model 3</span>
                <span>Model X</span>
                <span>Model Y</span>
                <span>Solar Roof</span>
                <span>Solar Panels</span>
                <span>Powerwall</span>
            </div>
            <div className='side-nav-options'>
                <span>Shop</span>
                <span>Account</span>
                <span>Menu</span>
            </div>
        </div>
    )
}

export default Nav;