import Tilt from 'react-parallax-tilt';
import './logo.css'
import brain from './brain.png'
const Logo = () => {
    return (
        <div >
            <Tilt className='Tilt  shadow-2 ml2' style={{ height: '150px', width: '150px' }} >
                <div>
                    <h1><img src={brain} alt="logo" /></h1>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;