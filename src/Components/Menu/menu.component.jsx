import './menu.styles.scss';
import Xmark from '../../Images/x-mark.svg';

const Menu = ({ isMenuOpen, toggleMenu }) => {
    return (
        <>
        <div className= {`menu-container ${isMenuOpen ? 'animate__animated animate__fadeInRight' : 'animate__animated animate__fadeOutRight'}`}>
            <div className='menu-exit'>
                <button onClick={toggleMenu}><img src={Xmark} alt='x' /></button>
            </div>
            <div className='menu-options-container'>
                <div className='menu-options'>
                {window.innerWidth <= 1200 ? (
                    <>
                    <button><span>Model S</span></button>
                    <button><span>Model 3</span></button>
                    <button><span>Model X</span></button>
                    <button><span>Model Y</span></button>
                    <button><span>Solar Roof</span></button>
                    <button><span>Solar Panel</span></button>
                    <button><span>Powerwall</span></button>
                    </>
                ) : (
                    <></>
                )}
                    <button><span>Existing Inventory</span></button>
                    <button><span>Used Inventory</span></button>
                    <button><span>Trade-In</span></button>
                    <button><span>Demo Drive</span></button>
                    <button><span>Insurance</span></button>
                    <button><span>Fleet</span></button>
                    <button><span>Cybertruck</span></button>
                    <button><span>Roadster</span></button>
                    <button><span>Semi</span></button>
                    <button><span>Charging</span></button>
                    <button><span>Commercial Energy</span></button>
                    <button><span>Utilities</span></button>
                    <button><span>Careers</span></button>
                    <button><span>Find Us</span></button>
                    <button><span>Events</span></button>
                    <button><span>Support</span></button>
                    <button><span>Investor Relations</span></button>
                </div>
            </div>
        </div>
        {isMenuOpen ? (
            <div className='overlay'></div>
        ) : (
            <></>
        )}
        </>
    )
}

export default Menu;