
import html from './assets/html.png'
import css from './assets/css.png';
import bootstrap from './assets/bootstrap.png';
import js from './assets/js.png';
import sql from './assets/sql.png';
import react from './assets/react.png';
import tailwind from './assets/tailwind.png';
import php from './assets/php.png';
import github from './assets/github.png';
import linux from './assets/linux.png';

import { FaLinkedin, FaTelegram, FaGithub } from 'react-icons/fa';

export const techs = [
    {
        id: 1,
        src: html,
        title: 'HTML',
        style: 'shadow-orange-500',
        alt: html,
        skillPercentage: 80,
        percentageWidth: 260,
        bgSkill: 'bg-orange-500'
        },
        {
        id: 2,
        src: css,
        title: 'CSS',
        style: 'shadow-blue-500',
        alt: css,
        skillPercentage: 60,
        percentageWidth: 195,
        bgSkill: 'bg-blue-500'
        },
        {
        id: 3,
        src: js,
        title: 'Javascript',
        style: 'shadow-yellow-500',
        alt: js,
        skillPercentage: 70,
        percentageWidth: 227.5,
        bgSkill: 'bg-yellow-500'
        },
        {
        id: 4,
        src: bootstrap,
        title: 'Boostrap',
        style: 'shadow-purple-900',
        alt: bootstrap,
        skillPercentage: 60,
        percentageWidth: 195,
        bgSkill: 'bg-purple-900'
        },
        {
        id: 5,
        src: react,
        title: 'React JS',
        style: 'shadow-cyan-500',
        alt: react,
        skillPercentage: 60,
        percentageWidth: 195,
        bgSkill: 'bg-cyan-500'
        },
        {
        id: 6,
        src: tailwind,
        title: 'TailwindCSS',
        style: 'shadow-teal-500',
        alt: tailwind,
        skillPercentage: 65,
        percentageWidth: 211.25,
        bgSkill: 'bg-teal-500'
        },
        {
        id: 7,
        src: github,
        title: 'GitHub',
        style: 'shadow-black',
        alt: github,
        skillPercentage: 50,
        percentageWidth: 162.5,
        bgSkill: 'bg-black'
        },
        {
        id: 8,
        src: php,
        title: 'PHP',
        style: 'shadow-purple-500',
        alt: github,
        skillPercentage: 70,
        percentageWidth: 227.5,
        bgSkill: 'bg-purple-500'
        },
        {
        id: 9,
        src: sql,
        title: 'SQL',
        style: 'shadow-blue-500',
        alt: github,
        skillPercentage: 60,
        percentageWidth: 195,
        bgSkill: 'bg-blue-500'
        },
        {
        id: 10,
        src: linux,
        title: 'Linux',
        style: 'shadow-yellow-500',
        alt: github,
        skillPercentage: 60,
        percentageWidth: 195,
        bgSkill: 'bg-yellow-500'
        }, 
    ]

export const socialLinks = [
    {
        id: 1,
        href: "https://www.linkedin.com/in/oudomreach-chyphalla-4b64691ba/",
        icon: FaLinkedin,
        // color: 'white'
        },
        {
        id: 2,
        href: "https://t.me/khorkoo",
        icon: FaTelegram,
        // color: 'white'
        },
        {
        id: 3,
        href: "https://github.com/Oudomreach",
        icon: FaGithub,
        // color: 'white'
    }
];

export const educations = [
    {
        id: 1,
        schoolTitle: 'Royal University of Phnom Penh',
        description: 'Bachelor Degree in Computer Science & Engineering',
        year: '2018 - 2022'
    },
    {
        id: 2,
        schoolTitle: 'Instinct Institute',
        description: 'Completed Basic Web Development',
        year: 'Jan - April 2020'
    },
    {
        id: 3,
        schoolTitle: 'American Intercon Institute',
        description: 'General English Program',
        year: 'March 2018'
    },
    {
        id: 4,
        schoolTitle: 'Toun Fa Chinese High School',
        description: 'High School Graduated',
        year: '2017'
    },
]
