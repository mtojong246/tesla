import './text.styles.scss';

const Text = ({title}) => {
    return (
        <div className='text-container' id='text'>
            <div className='text-title'>
                <span id='text-span'>{title}</span>
                <p id='text-p'>Schedule a Demo Drive Today</p>
            </div>
            <div className='text-button'>
                <button>Demo</button>
            </div>
        </div>
    )
}

export default Text;