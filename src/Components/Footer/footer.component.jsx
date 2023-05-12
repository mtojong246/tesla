import './footer.styles.scss';

const Footer = () => {
    return (
        <div className='footer-container' id='footer' >
            <div className='footer-options' style={{display: `${window.innerWidth > 625 ? 'flex' : 'none'}`}}>
                <span>Tesla &#169; 2023</span>
                <span>Privacy & Legal</span>
                <span>Vehicle Recalls</span>
                <span>Contact</span>
                <span>News</span>
                <span>Get Updates</span>
                <span>Locations</span>
            </div>
        </div>
    )
}

export default Footer;