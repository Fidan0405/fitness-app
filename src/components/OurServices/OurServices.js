import styles from "./Ourservices.module.scss";
import PilatesIcon from "../../assets/pilates.icon.png";
import YogaIcon from "../../assets/yoga.icon.png";
import CardioIcon from "../../assets/cardio.icon.png";
import BalanceIcon from "../../assets/balance.icon.png";
import MansetFoto from "../../assets/mansetfoto.png";
import { Link } from "react-router-dom";



const OurServices = () => {

    const cardData = [
        {
            imgUrl: PilatesIcon,
            title: "Pilates",
            description: "For those wishing to move on from a beginners class, adding more challenge and variety to your Pilates class. Small personal classes - maximum of 7 people."
        },
        {
            imgUrl: YogaIcon,
            title: "Yoga",
            description: "All Level classes are accessible to everyone, from beginners to advanced practitioners. Variations are given so you can challenge yourself or take it easy, depending on how you feel."
        },
        {
            imgUrl: CardioIcon,
            title: "Cardio",
            description: "Cardiovascular exercise is exercise that gets your heart rate up. Though some people use it solely for weight loss, cardio has other benefits as well. There are a wide variety of cardiovascular exercises, but consistency, duration, and intensity are the most important factors for meeting your fitness goals."
        },
        {
            imgUrl: BalanceIcon,
            title: "Balance Excersise",
            description: "Balancing exercises work your core muscles, lower back, and legs. Lower-body strength-training exercises can also help improve your balance."
        },
    ]


    return (
        <div className={styles.container}>
            <div className={styles.header}>OUR SERVICES</div>
            <div className={styles.div}>
                <div className={styles.cards}>
                    {
                        cardData.map(card => (
                            <Link className={styles.cardContainer}>
                                <div className={styles.card}>
                                    <img className={styles.cardImage} src={card.imgUrl} />
                                    <div className={styles.textArea}>
                                        <div className={styles.title}>{card.title}</div>
                                        <p className={styles.description}>{card.description}</p>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
                <div className={styles.image}>
                    <img src={MansetFoto} className={styles.img} />
                </div>
            </div>
        </div>
    )
}

export default OurServices;
