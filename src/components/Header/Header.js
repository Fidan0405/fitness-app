import styles from "./Header.module.scss";
import Navbar from "./Navbar";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';



const Header = () => {

    const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        height: '1600px',
    }

    const slideImages = [
        {
            url: 'https://static.vecteezy.com/system/resources/previews/002/754/156/large_2x/fitness-equipment-and-health-food-on-white-wooden-background-free-photo.JPG',
            title: 'Health & Fitness Guide',
            decsiription: 'Walking, lifting weights, doing chores – it’s all good. Regardless of what you do, regular exercise and physical activity is the path to health and well-being. Exercise burns fat, builds muscle, lowers cholesterol, eases stress and anxiety, lets us sleep restfully. In this guide, we match resources to your exercise needs -- at every fitness level.',
            btn: 'JOIN US',
        },
        {
            url: 'https://img.freepik.com/free-photo/flat-lay-dumbbells-with-copy-space_23-2148531468.jpg?w=2000',
            title: 'Fuel Your Body',
            decsiription: 'Protein can help you shed those unwanted pounds and keep your belly full. But it\'s important to eat the right amount and the right kind of protein to get the health benefits. Find out how much you know about hydration.',
            btn: 'READ',
        },
        {
            url: 'https://static.vecteezy.com/system/resources/previews/001/223/677/large_2x/fitness-dumbbells-on-color-background-free-photo.jpg',
            title: 'Your Blood Oxygen Level',
            decsiription: 'The blood in your body delivers oxygen to all of your cells. When you breathe and draw fresh oxygen into your lungs, red blood cells bind with the oxygen and carry it through your bloodstream. On a cellular level, oxygen helps replace cells that wear out, supplies you with energy, supports your immune system, and more. That\'s why it\'s important to make sure your blood oxygen level isn\'t too high or too low.',
            btn: 'READ',
        },
    ];


    return (
        <div className={styles.container} >
            <div className="slide-container">
                <Navbar />
                <Slide autoplay>
                    {slideImages.map((slideImage, index) => (
                        <div key={index}>
                            <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                                <div>
                                    <div className={styles.card}>
                                        <h1 className={styles.title}>{slideImage.title}</h1>
                                        <p className={styles.description}>{slideImage.decsiription}</p>
                                        <div className={styles.btnField}>
                                            <button className={styles.btn}>{slideImage.btn}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slide>
            </div>
        </div>
    )
}

export default Header;
