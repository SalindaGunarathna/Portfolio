import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll"
import Illustration from "../../assets/here_image.png"
import { NavHashLink } from "react-router-hash-link"
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import facebook from '../../assets/facebook2.png'
import Hello from '../../assets/Hello.gif'
import telegram from '../../assets/telegram.svg'

import    HereBackgroud  from '../../assets/HereBackgroud.jpg'


import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";



import BubbleText from "../bubleText/BubbleText"
import Particle from "../partical/particle"

export function Hero() {

  const handleButtonClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (

    <div >
    

    <Container id="home"  >

      <div className="hero-particle" style={{ zIndex: 5 }}>
      {/* <Particle /> */}

      </div>

      
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>Hello <img src={Hello} alt="Hello" width="20px" />, I'm</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <div>
            <h1>
               <BubbleText /> 
            </h1>

          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>Full Stack Developer</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume"></p>
        </ScrollAnimation>




        <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
          <BrowserRouter>
            <AwesomeButton type="primary" size="large" style={{ borderRadius: '50px' }} onPress={async () => {
              // await for something then call
              handleButtonClick();

            }}>
              Contact
            </AwesomeButton>
          </BrowserRouter>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
          <div className="social-media"><a
            href="https://www.linkedin.com/in/salinda-gunarathna-a036a4263"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="Linkedin" />
          </a>
            <a
              href="https://github.com/SalindaGunarathna"
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a
              href="https://wa.me/+94775106025"
              target="_blank"
              rel="noreferrer"
            >
              <img src={whatsapp} alt="Whatsapp" />
            </a>
             <a
              href="https://www.facebook.com/profile.php?id=100093844371992&mibextid=ZbWKwL"
              target="_blank"
              rel="noreferrer"
            >
              <img src={facebook} alt="telegram" />
            </a> 
            
            </div>
        </ScrollAnimation>

      </div>


      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
          <img src={Illustration} alt="Ilustração" />
        </ScrollAnimation>
      </div>

    </Container>

    </div>

  )
}