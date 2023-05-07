import { useEffect } from 'react';
import './home.styles.scss';
import Text from '../../Components/Text/text.component';


const Home = () => {

    useEffect(() => {
        const page = document.getElementById('scroll-container');
        const nav = document.getElementById('nav');
        const pages = document.querySelectorAll('.page');

        const handleScroll = () => {
            if (page.scrollTop > window.innerHeight) {
                nav.style.color = 'black';
            } else {
                nav.style.color = 'white';
            }

            for (let i=0; i<pages.length; i++) {
                if (pages[i].getBoundingClientRect().top === 0) {
                    pages[i].firstChild.style.display = 'block'
                } else {
                    pages[i].firstChild.style.display = 'none'
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
                    <div className='homepage-text-container' style={{display: 'block'}}>
                        <Text title='Experience Tesla'/>
                    </div>
                    <video autoPlay muted loop id="video">
                        <source src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/Homepage-Test_Drive-NA-Desktop.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className='homepage-model3-container page'>
                    <div className='homepage-text-container' style={{display: 'none'}}>
                        <Text title='Model 3'/>
                    </div>
                </div>
                <div className='homepage-modelY-container page'>
                    <div className='homepage-text-container' style={{display: 'none'}}>
                        <Text title='Model Y'/>
                    </div>
                </div>
                <div className='homepage-modelS-container page'>
                    <div className='homepage-text-container' style={{display: 'none'}}>
                        <Text title='Model S'/>
                    </div>
                </div>
                <div className='homepage-modelX-container page'>
                    <div className='homepage-text-container' style={{display: 'none'}}>
                        <Text title='Model X'/>
                    </div>
                </div>
                <div className='homepage-solar-panel-container page'>
                    <div className='homepage-text-container' style={{display: 'none'}}>
                        <Text title='Solar Panel'/>
                    </div>
                </div>
                <div className='homepage-solar-roof-container page'>
                    <div className='homepage-text-container' style={{display: 'none'}}>
                        <Text title='Solar Roof'/>
                    </div>
                </div>
                <div className='homepage-accessories-container page'>
                    <div className='homepage-text-container' style={{display: 'none'}}>
                        <Text title='Accessories'/>
                    </div>
                </div>
        </div>
    )
}

export default Home;