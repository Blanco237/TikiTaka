import React from 'react'

import classes from './hero.module.css'

import img1 from './assets/1.png';
import img2 from './assets/2.png';
import analytics from './assets/analytics.svg';
import calendar from './assets/calendar.svg';
import coconut from './assets/coconut.svg';
import fingerPrint from './assets/finger-print.svg';
import law from './assets/law.svg';
import logout from './assets/logout.svg';
import person from './assets/person.svg';
import plane from './assets/plane-1.svg';
import ListItem from './ListItem';


const Hero = () => {
    const data = [
        {
            icon: analytics,
            'text': 'Analytics & Reporting'
        },
        {
            icon: calendar,
            'text': 'Time & Attendance'
        },
        {
            icon: coconut,
            'text': 'Leaves & Holidays'
        },
        {
            icon: fingerPrint,
            'text': 'HR Information System'
        },
        {
            icon: law,
            'text': 'Disciplinary'
        },
        {
            icon: logout,
            'text': 'Exit & Off-boarding'
        },
        {
            icon: person,
            'text': 'Onboarding'
        },
        {
            icon: plane,
            'text': 'Travel & Requisitions'
        },
    ]

  return (
    <div className={classes.heroContainer}>
        <div className={classes.heroContent}>
            <div className={classes.heroCenter}>
                <div className={classes.heroImage}>
                    <img src={img1} alt="hero" />
                    <img src={img2} alt="f-hero" className={classes.fHero} />
                </div>
                <div className={classes.heroIcons}>
                    <ul className={classes.iconList}>
                        {data.map((item, index) => {
                           return( 
                            <ListItem index={index} item={item} />
                           )
                        }
                        )
                        }
                    </ul> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero