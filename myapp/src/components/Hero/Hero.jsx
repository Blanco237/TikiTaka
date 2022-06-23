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
    <div className={classes.hero__container}>
        <div className={classes.hero__content}>
            <div className={classes.hero__center}>
                <div className={classes.hero__image}>
                    <img src={img1} alt="hero" />
                </div>
                <div className={classes.hero__icons}>
                    <ul className={classes.hero__icons__list}>
                        {data.map((item, index) => {
                           return( 
                           <li className={`${classes.list__item} ${classes.list__item + index} `} key={index}>
                            <div className={classes.list__item__icon}>
                                <img src={item.icon} />
                                <p className={classes.list__item__text}>{item.text}</p>
                            </div>
                        </li>
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