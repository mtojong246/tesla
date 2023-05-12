import './nav.styles.scss';
import Logo from '../../Images/tesla-logo-white.png';
import { useEffect} from 'react';

const Nav = ({toggleMenu}) => {
    
    useEffect(() => {
        const overlay = document.querySelector('.nav-overlay');
        const spanList = document.querySelectorAll('.nav-span');

        spanList.forEach(span => {
            span.addEventListener('mouseover', () => {
                let position = span.getBoundingClientRect();
                overlay.classList.add('active');
                overlay.style.left = position.x + 'px';
                overlay.style.top = position.y + 'px';
                overlay.style.height = position.height + 'px';
		        overlay.style.width = position.width + 'px'; 
            })
            span.addEventListener('mouseout', () => {
                overlay.classList.remove('active');
            });
        })

    }, [])

    return (
        <div className='nav-bar-container' id='nav'>
            <div className='nav-logo'>
                <img src={Logo} alt='tesla-logo' id='logo'/>
            </div>
            <div className='nav-overlay'></div>
            <div className='nav-option'>
                <button className='nav-span' style={{color: 'white'}}>Model S</button>
                <button className='nav-span' style={{color: 'white'}}>Model 3</button>
                <button className='nav-span' style={{color: 'white'}}>Model X</button>
                <button className='nav-span' style={{color: 'white'}}>Model Y</button>
                <button className='nav-span' style={{color: 'white'}}>Solar Roof</button>
                <button className='nav-span' style={{color: 'white'}}>Solar Panel</button>
                <button className='nav-span' style={{color: 'white'}}>Powerwall</button>
            </div>
            <div className='side-nav-options'>
                <button id='shop' className='nav-span' style={{color: 'white'}}>Shop</button>
                <button id='account' className='nav-span' style={{color: 'white'}}>Account</button>
                <button className='nav-span' style={{color: 'white'}} onClick={toggleMenu}>Menu</button>
            </div>
        </div>
    )
}

export default Nav;