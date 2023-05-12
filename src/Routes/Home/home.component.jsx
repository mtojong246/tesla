import { useEffect } from 'react';
import './home.styles.scss';
import Text from '../../Components/Text/text.component';

const Home = () => {

    useEffect(() => {
        const page = document.getElementById('scroll-container');
        const navs = document.querySelectorAll('.nav-span')
        const logo = document.getElementById('logo');
        const pages = document.querySelectorAll('.page');
        const firstPage = document.querySelector('.first');

        const colorChange = () => {
            if (Math.abs(firstPage.getBoundingClientRect().top) === 0) {
                navs.forEach(nav => {
                    nav.classList.add('color-white');
                    nav.classList.remove('color-black');
                    nav.style.color='white';
                })
                logo.classList.add('logo-white');
                logo.classList.remove('logo-black');
            } else if (Math.abs(firstPage.getBoundingClientRect().top) >= window.innerHeight) {
                navs.forEach(nav => {
                    nav.classList.add('color-black');
                    nav.classList.remove('color-white');
                    nav.style.color='black'
                })
                logo.classList.add('logo-black');
                logo.classList.remove('logo-white');
                document.getElementById('title').classList.remove('animate__animated');
                document.getElementById('description').classList.remove('animate__animated');
                document.getElementById('button').classList.remove('animate__animated');
            }
        }

        const handleScroll = () => {

            for (let i=0; i<pages.length; i++) {
                let distanceToTop = (pages[i].getBoundingClientRect().top);
                let elementHeight = pages[i].offsetHeight;
                let scrollTop = document.documentElement.scrollTop;

                let opacity = 1;
                if (scrollTop > distanceToTop) {
                    opacity = (1 - (scrollTop - distanceToTop)*4/ elementHeight);
                } else if (scrollTop === distanceToTop) {
                    opacity = 1;
                } else if (scrollTop < distanceToTop && distanceToTop <= (window.innerHeight)*(0.35)) {
                    opacity = (1 - (distanceToTop*4) / elementHeight);
                } else {
                    opacity = 0;
                }

                if (opacity > 0) {
                    pages[i].firstChild.style.opacity = opacity;
                    pages[i].firstChild.style.display = 'block';

                } else {
                    pages[i].firstChild.style.opacity = 0;
                    pages[i].firstChild.style.display = 'none';
                }
            }
        }

        page.addEventListener('scroll', () => {handleScroll(); colorChange()})

        return () => {
            page.removeEventListener('scroll', () => {handleScroll(); colorChange()})
        }
        
    }, [])

    return (
        <div className='homepage-container' id='scroll-container'>
                <div className='homepage-video-container page first'>
                    <div className='homepage-text-container' style={{opacity: 1, display: 'block'}}>
                        <Text title='Experience Tesla' desc='Schedule a Demo Drive Today'/>
                    </div>
                    <video autoPlay muted loop id="video">
                        <source src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/Homepage-Test_Drive-NA-Desktop.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className='homepage-model3-container page'>
                    <div className='homepage-text-container' style={{opacity: 0, display: 'none'}}>
                        <Text title='Model 3' desc='View Inventory'/>
                    </div>
                </div>
                <div className='homepage-modelY-container page'>
                    <div className='homepage-text-container' style={{opacity: 0, display: 'none'}}>
                        <Text title='Model Y' desc='View Inventory'/>
                    </div>
                </div>
                <div className='homepage-modelS-container page'>
                    <div className='homepage-text-container' style={{opacity: 0, display: 'none'}}>
                        <Text title='Model S' desc='View Inventory'/>
                    </div>
                </div>
                <div className='homepage-modelX-container page'>
                    <div className='homepage-text-container' style={{opacity: 0, display: 'none'}}>
                        <Text title='Model X' desc='View Inventory'/>
                    </div>
                </div>
                <div className='homepage-solar-panel-container page'>
                    <div className='homepage-text-container' style={{opacity: 0, display: 'none'}}>
                        <Text title='Solar Panel' desc='Lowest Cost Solar Panels in America'/>
                    </div>
                </div>
                <div className='homepage-solar-roof-container page'>
                    <div className='homepage-text-container' style={{opacity: 0, display: 'none'}}>
                        <Text title='Solar Roof' desc='Produce Clean Energy From Your Roof'/>
                    </div>
                </div>
                <div className='homepage-accessories-container page'>
                    <div className='homepage-text-container' style={{opacity: 0, display: 'none'}}>
                        <Text title='Accessories' desc=''/>
                    </div>
                </div>
        </div>
    )
}

export default Home;