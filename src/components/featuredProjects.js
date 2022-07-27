import aipScreenshot from "../images/aipScreenshot.png"
import literbugScreenshot from "../images/literbugScreenshot.png"
import weatherserveScreenshot from "../images/weatherserveScreenshot.png"
import artistScreenshot from "../images/artistPortfolio.png"


export const featuredProjects = [
    {
        title:"Artist Portfolio",
        description:`A functional website concept for a graphic designer. A focus on visuals that highlights
        the skills of the artist. Fully responsive and built in React. Utilizes React packages EmailJS for 
        direct messaging and SwiperJS for responsive image carousels. Animations with Framer Motion.`,
        skills:["React", "EmailJS","Framer Motion", "HTML", "SCSS"],
        image:artistScreenshot,
        id:3,
        githubLink:"https://github.com/Jesuss27/carlas_design_project",
        herokuLink:"https://carla-portfolio.herokuapp.com/",

    },
    {
        title:"Poetify",
        description:`An app that takes your favorite books and poems
        and scans them for literary motifs and commonly used words.
        Access any piece of literature available in the Gutenberg Open Source Project!`,
        skills:["Bootstrap 4", "Vanilla JavaScript", "HTML", "CSS"],
        image:literbugScreenshot,
        id:0,
        githubLink:"https://github.com/Jesuss27/Poetify",
        herokuLink:"https://literbug.herokuapp.com/",

    },
    {
        title:"AIP?",
        description:`A nutrition app that determines 
        whether the food you are eating is compliant
         with the Auto Immune Protocol (AIP) diet.
         If you have done this diet, than you know exactly why this is needed.`,
        skills:["React", "React-Bootstrap", "SASS", "Styled Components"],
        image:aipScreenshot,
        id:1,
        githubLink:"https://github.com/Jesuss27/aip-react-bootstrap",
        herokuLink:"https://aipfriendly.herokuapp.com/",


    },
    {
        title:"Weather Channel",
        description:`A weather app for that uses geolocation to 
        give the current weather and
         7-day forecast. Also, displays
         the UV index (always use sunscreen)!`,
        skills:["Bootstrap 4", "Vanilla JavaScript", "HTML", "CSS"],
        image:weatherserveScreenshot,
        id:2,
        githubLink:"https://github.com/Jesuss27/Weather-App",
        herokuLink:"https://weatherserve.herokuapp.com/",

    },
    
]