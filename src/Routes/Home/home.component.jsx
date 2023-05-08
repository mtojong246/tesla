import { useEffect } from 'react';
import './home.styles.scss';
import Text from '../../Components/Text/text.component';


const Home = () => {

    useEffect(() => {
        const page = document.getElementById('scroll-container');
        const nav = document.getElementById('nav');
        const pages = document.querySelectorAll('.page');
        const logo = document.getElementById('logo');

        const handleScroll = () => {
            if (page.scrollTop > window.innerHeight) {
                nav.style.color = 'black';
                logo.style.filter = 'invert(100%) sepia(4%) saturate(7450%) hue-rotate(32deg) brightness(119%) contrast(98%)';
            } else {
                nav.style.color = 'white';
                logo.style.filter = 'invert(0%) sepia(4%) saturate(16%) hue-rotate(109deg) brightness(96%) contrast(103%)';
            }

            for (let i=0; i<pages.length; i++) {
                let distanceToTop = (pages[i].getBoundingClientRect().top);
                let elementHeight = pages[i].offsetHeight;
                let scrollTop = document.documentElement.scrollTop;

                let opacity = 1;
                if (scrollTop > distanceToTop) {
                    opacity = (1 - (scrollTop - distanceToTop) / elementHeight) - 0.35;
                } else if (scrollTop === distanceToTop) {
                    opacity = 1;
                } else if (scrollTop < distanceToTop && distanceToTop <= (window.innerHeight)*(0.35)) {
                    opacity = (1 - distanceToTop / elementHeight) - 0.65;
                } else {
                    opacity = 0;
                }

                if (opacity >= 0) {
                    pages[i].firstChild.style.opacity = opacity;
                    pages[i].firstChild.style.display = 'block';

                } else {
                    pages[i].firstChild.style.opacity = 0;
                    pages[i].firstChild.style.display = 'none';
                }
            }
        }

        page.addEventListener('scroll', handleScroll)

        return () => {
            page.removeEventListener('scroll', handleScroll)
        }
        
    }, [])

    return (
        <div className='homepage-container' id='scroll-container'>
                <div className='homepage-video-container page'>
                    <div className='homepage-text-container' style={{opacity: 1}}>
                        <Text title='Experience Tesla' desc='Schedule a Demo Drive Today'/>
                    </div>
                    <video autoPlay muted loop id="video">
                        <source src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/Homepage-Test_Drive-NA-Desktop.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className='homepage-model3-container page'>
                    <div className='homepage-text-container' style={{opacity: 0}}>
                        <Text title='Model 3' desc='View Inventory'/>
                    </div>
                </div>
                <div className='homepage-modelY-container page'>
                    <div className='homepage-text-container' style={{opacity: 0}}>
                        <Text title='Model Y' desc='View Inventory'/>
                    </div>
                </div>
                <div className='homepage-modelS-container page'>
                    <div className='homepage-text-container' style={{opacity: 0}}>
                        <Text title='Model S' desc='View Inventory'/>
                    </div>
                </div>
                <div className='homepage-modelX-container page'>
                    <div className='homepage-text-container' style={{opacity: 0}}>
                        <Text title='Model X' desc='View Inventory'/>
                    </div>
                </div>
                <div className='homepage-solar-panel-container page'>
                    <div className='homepage-text-container' style={{opacity: 0}}>
                        <Text title='Solar Panel' desc='Lowest Cost Solar Panels in America'/>
                    </div>
                </div>
                <div className='homepage-solar-roof-container page'>
                    <div className='homepage-text-container' style={{opacity: 0}}>
                        <Text title='Solar Roof' desc='Produce Clean Energy From Your Roof'/>
                    </div>
                </div>
                <div className='homepage-accessories-container page'>
                    <div className='homepage-text-container' style={{opacity: 0}}>
                        <Text title='Accessories' desc=''/>
                    </div>
                </div>
        </div>
    )
}

export default Home;