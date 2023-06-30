import React, { useEffect, useState } from 'react';
import styles from "./AboutUs.module.scss"


const AboutUs = () => {
  const data = [
    {
      url: 'https://30dayfitness.app/static/a2902a44283070e930abe70bb77cc4d6/a1eb1/planks-for-beginners.jpg',
      title: '2 Week Challange',
      decsiription: 'Treat Yourself to an Affordable Membership',
      btn: 'JOIN US',
    },
    {
      url: 'https://origympersonaltrainercourses.co.uk/files/img_cache/39214/1920_1682350217_PersonalTrainerHighFive-ClienteleDiffersBetweenThoseOfAStrengthConditioningCoachVsPersonalTrainer.jpeg?1682350304',
      title: 'Personal Training',
      decsiription: 'Fitness coaches help people develop healthy habits that contribute to emotional and social well-being in addition to physical fitness.',
      btn: 'READ',
    },
    {
      url: 'https://lafayettefamilyymca.org/wp-content/uploads/2022/12/ZUMBA.jpeg',
      title: 'Group Class',
      decsiription: 'Group personal training involves a single trainer guiding a group of members towards their fitness goals.',
      btn: 'READ',
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>WHAT WE DO</h1>
      <div className={styles.card}>
        {
          data.map(card => (

            <div className={styles.cardContainer}>
              <div className={styles.cardBody}>
                <div className={styles.image}>
                  <img src={card.url} />
                </div>
                <div className={styles.content}>
                  <h3 className={styles.title}>{card.title}</h3>
                  <p className={styles.decsiription}>{card.decsiription}</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default AboutUs;
