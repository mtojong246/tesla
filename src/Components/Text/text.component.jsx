import './text.styles.scss';

const Text = ({title, desc}) => {
    return (
        <div className='text-container'>
            <div className='text-title' style={{color: `${title === 'Experience Tesla' ? 'white' : 'black'}`}}>
                <span id='text-span'>{title}</span>
                <p id='text-p' style={{textDecoration: `${title.includes('Model') ? 'underline' : 'none'}`}}>{desc}</p>
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
                    <div className='text-button'>
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
        </div>
    )
}

export default Text;