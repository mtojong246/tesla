import Footer from '../Footer/footer.component';
import './text.styles.scss';

const Text = ({title, desc}) => {
    return (
        <div className='text-container'>
            <div className='text-title' style={{color: `${title === 'Experience Tesla' ? 'white' : 'black'}`}}>
                <div id='title' className={`${title === 'Experience Tesla' ? 'animate__animated animate__fadeInUp animate__delay-1s' : ''}`}>
                    <span>{title}</span>
                </div>
                {title.includes('Model') ? (
                <div id='description'>
                    <p className='description-model'>{desc}</p>
                </div>
                ) : (
                <div id='description' className={`${title === 'Experience Tesla' ? 'animate__animated animate__fadeInUp animate__delay-2s' : ''}`}>
                    <p>{desc}</p>
                </div>
                )}
            </div>
            <div className='text-buttons-container'>
            {title.includes('Model') || title.includes('Solar') ? (
                <div className='text-double-buttons'>
                    <button id='button-one'>Order Now</button>
                    <button id='button-two'>{title.includes('Model') ? 'Demo Drive' : 'Learn More'}</button>
                </div>
            ) : (
                <>
                {title === 'Experience Tesla' ? (
                    <div id='button' className='text-button animate__animated animate__fadeInUp animate__delay-2s'>
                        <button>Demo Drive</button>
                    </div>
                ) : (
                    <div className='accessories-button'>
                        <button>Shop Now</button>
                    </div>
                )}
                </>
            )}
            </div>
            {title.includes('Accessories') ? (
                <div className='text-footer-container' style={{display: `${window.innerWidth > 625 ? 'block' : 'none'}`}}>
                    <Footer/>
                </div>
            ) : (
                <></>
            )}
        </div>
    )
}

export default Text;