import './home.styles.scss';

const Home = () => {
    return (
        <>
            <div className='homepage-video-container'>
                <video autoplay muted loop id="video">
                    <source src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/Homepage-Test_Drive-NA-Desktop.mp4" type="video/mp4" />
                </video>
                <div className='homepage-title'>
                    <span>Experience Tesla</span>
                    <p>Schedule a Demo Drive Today</p>
                </div>
                <div className='homepage-button'>
                    <button><span>Demo Drive</span></button>
                </div>
            </div>
        </>
    )
}

export default Home;