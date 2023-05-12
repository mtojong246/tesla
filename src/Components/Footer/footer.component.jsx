import './footer.styles.scss';

const Footer = () => {
    return (
        <div className='footer-container' id='footer' style={{display: `${window.innerWidth > 625 ? 'block' : 'none'}`}}>
            <div className='footer-options'>
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