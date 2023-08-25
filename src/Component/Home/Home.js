// Home.js
import Project from '../Project/Project';
import './Home.css';
import sanjeet from './mypic.png';
import Contact from '../Contact/Contact';
import About from '../About/About';
import { useState, useEffect } from 'react'; // Import useState and useEffect from React
import $ from 'jquery'; // Import jQuery
import Skills from '../Skills/Skills';

const backgrounds = [
    "linear-gradient(109.6deg, rgb(36, 45, 57) 11.2%, rgb(16, 37, 60) 51.2%, rgb(0, 0, 0) 98.6%)",
    "linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%)",
    "linear-gradient(178.1deg, rgb(60, 55, 106) 8.5%, rgb(23, 20, 69) 82.4%)",
    "linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)",
    "linear-gradient(110.6deg, rgb(156, 116, 129) -18.3%, rgb(67, 54, 74) 16.4%, rgb(47, 48, 67) 68.2%, rgb(27, 23, 36) 99.1%)",
    "radial-gradient(circle at 10% 20%, rgb(90, 92, 106) 0%, rgb(32, 45, 58) 81.3%)"
];

const Home = () => {
    const [currentBackground, setCurrentBackground] = useState(backgrounds[0]); // Initialize with the first background

    // Function to change the background
    const changeBackground = () => {
        const randomIndex = Math.floor(Math.random() * backgrounds.length);
        setCurrentBackground(backgrounds[randomIndex]);
    };

    useEffect(() => {
        // Your JavaScript code here
        var words = ["Engineer", "Programmer", "Full Stack Developer"],
            part,
            i = 0,
            offset = 0,
            len = words.length,
            forwards = true,
            skip_count = 0,
            skip_delay = 15,
            speed = 70;

        var wordflick = function () {
            setInterval(function () {
                if (forwards) {
                    if (offset >= words[i].length) {
                        ++skip_count;
                        if (skip_count === skip_delay) {
                            forwards = false;
                            skip_count = 0;
                        }
                    }
                } else {
                    if (offset === 0) {
                        forwards = true;
                        i++;
                        offset = 0;
                        if (i >= len) {
                            i = 0;
                        }
                    }
                }
                part = words[i].substr(0, offset);
                if (skip_count === 0) {
                    if (forwards) {
                        offset++;
                    } else {
                        offset--;
                    }
                }
                $('.word').text(part);
            }, speed);
        };

        $(document).ready(function () {
            wordflick();
        });

        // Set an interval to change the background every 5 seconds
        const interval = setInterval(changeBackground, 2000);

        // Clean up the interval when the component unmounts
        return () => {
            clearInterval(wordflick);
            clearInterval(interval);
        };
    }, []); 

    return (
        <>
            <div id="home" style={{ background: currentBackground }}>
                <div className='myPic'>
                    <img src={sanjeet} alt='pic' />
                </div>
                <div className='myText'>
                    <div><h1>Hi, I am Sanjeet</h1></div>
                    <div className="word"></div>
                </div>
                
            </div>
            <About />
            <Project />
            <Skills />
            <Contact />
        </>
    );
};

export default Home;


