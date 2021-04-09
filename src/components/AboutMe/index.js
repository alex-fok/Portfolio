import {Fragment} from 'react';
import './index.css';

const AboutMe = () => {
    return (
      <Fragment>
        <img className='float-left m-2' src='./img/about_me.jpg' alt='self_portrait' />
        <p>
          My name is Alex. I graduated from University of Oregon in 2016, with Bachelor Degree majoring in Computer Science and Japanese Study. As extension to my studies, I enjoy building web applications with open source libraries, as well as reading Japanese novels.
        </p>
        <p>
          I seek my career in web development, mainly because accessing an web application could be so easy. Instead of having to worry about installing every tool correctly, an application which only requires an URL (and maybe some network settings) to run is quite unbeatable in my opinion. Surely there are better options for heavy lifting, but the light weightness of Web Applications is what draws me to it.
        </p>
        <p>
          As a Full Stack Developer, I look forward to participating in projects that improve my understanding in web development, as well as the modern frameworks and libraries that are built around it. By broadening my knowledge, I strive to build applications with variants of functionalities, while also keeping an sophisticated approach to users and developers.
        </p>
      </Fragment>
    );
}

export default AboutMe;