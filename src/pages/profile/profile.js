import './profile.css'
import HeroImg from '../../assets/images/hero.png'

const Profile = () => (
    <div className='container'>
        <div className='name-box'>
            <h1>Hola!, soy Mauricio Cordero</h1>
        </div>
        <div className='image-box'>
            <img src={HeroImg} alt='dev' />
        </div>
    </div>
)

export default Profile