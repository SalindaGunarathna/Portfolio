import { Container } from "./styles";
// import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


import Image from "../../assets/profile-pic.png";


import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

import webAppImage from "../../assets/GymWebApp.png"
import cameramenApp from "../../assets/cameramenApp.png"
import carSaleProject from "../../assets/carSaleProject.jpg"
import cwpfAplication from "../../assets/wpfAplication-01.png"
import cwpfAplication2 from "../../assets/WPFaplication.svg"
import MLproject from "../../assets/MLproject.jpg"


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">



        <ScrollAnimation animateIn="flipInX">

          
          <div className="project">


            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">

                <CardItem translateZ="100" className="w-full mt-4">
                  <img
                    src={webAppImage}
                    height="500"
                    width="500"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>

                <header>
                  <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                  <div className="project-links">
                    <a href="https://github.com/SalindaGunarathna/GymManagementWebApp" target="_blank" rel="noreferrer">
                      <img src={externalLink} alt="Visit site" />
                    </a>
                  </div>
                </header>
                <div className="body">

                  {/* <img src={webAppImage} alt="Kameleon" className="project-image" /> */}

                  <h3>Gym Management web aplicvation</h3>
                  <p>
                    I developed a web application using the MERN (MongoDB, Express.js, React.js, Node.js) stack.
                    This application incorporates a comprehensive set of features, including a login system with authentication capabilities.
                    Additionally, it includes an administrative interface allowing the admin to manage user privileges effectively.
                  </p>
                </div>
                <footer>
                  <ul className="tech-list">
                    <li>Mern Starck</li>
                  </ul>
                </footer>




                <div className="flex justify-between items-center mt-20">

                </div>
              </CardBody>
            </CardContainer>


          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">

            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">

                <CardItem translateZ="100" className="w-full mt-4">
                  <img
                    src={cameramenApp}
                    height="500"
                    width="500"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>

                <header>
                  <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                  <div className="project-links">
                    <a href="https://github.com/SalindaGunarathna/Cameraman_MobileApp" target="_blank" rel="noreferrer">
                      <img src={externalLink} alt="Visit site" />
                    </a>
                  </div>
                </header>
                <div className="body">
                 
                  <h3>Find Cmaeraman Flutter app</h3>
                  <p>
                    In this Flutter app, users can easily find and hire cameramen
                    for their events based on price range and proximity. Developed using
                    Flutter and Firebase,
                    . My main contribution to this group project was in backend development using
                    Flutter, focusing on user data management, authentication, and integration with Firebase services.
                  </p>
                </div>
                <footer>
                  <ul className="tech-list">
                    <li>Flutter</li>
                    <li>Firbase</li>
                  </ul>
                </footer>




                <div className="flex justify-between items-center mt-20">

                </div>
              </CardBody>
            </CardContainer>



          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">


          <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">

                <CardItem translateZ="100" className="w-full mt-4">
                  <img
                    src={carSaleProject}
                    height="500"
                    width="500"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>

                <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/SalindaGunarathna/otto_car_sale_webApp" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              
              <h3>Octo Car sale webaplication -Backebd</h3>
              <p>
                I contributed to the backend development of this project using Express, Node.js,
                and MongoDB for an actual client who needed a solution for managing sales of their cars.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>MongoDB</li>
                <li>Express</li>
                <li>Node js</li>
              </ul>
            </footer>




                <div className="flex justify-between items-center mt-20">

                </div>
              </CardBody>
            </CardContainer>



            
          </div>
        </ScrollAnimation>

       

        <ScrollAnimation animateIn="flipInX">
          
          <div className="project">

          <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">

                <CardItem translateZ="100" className="w-full mt-4">
                  <img
                    src={cwpfAplication}
                    height="500"
                    width="500"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>

                <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/SalindaGunarathna/Individual_Project_GUI" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
             
              <h3>Student managemebt system .Net framework wpf</h3>
              <p>
                I developed a simple WPF application using the .NET framework.
                This application is designed to help students manage their modules efficiently.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>.Net</li>
                <li>WPF Aplication</li>
              </ul>
            </footer>



                <div className="flex justify-between items-center mt-20">

                </div>
              </CardBody>
            </CardContainer>



            
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">



          <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">

                <CardItem translateZ="100" className="w-full mt-4">
                  <img
                    src={cwpfAplication2}
                    height="500"
                    width="500"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>

                <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/SalindaGunarathna/Group_Project_GUI_3945_4062" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
             
              <h3>Student managemebt system .Net framework wpf with database</h3>
              <p>
                I participated in a group project where we developed a student management
                system using WPF application with C# language. My primary contribution was focused
                on backend development. The system is integrated with
                a SQL database to efficiently manage student data.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wpf aplication</li>
                <li>SQL data base</li>
                <li>C#</li>
                <li></li>
              </ul>
            </footer>



                <div className="flex justify-between items-center mt-20">

                </div>
              </CardBody>
            </CardContainer>




            
          </div>
        </ScrollAnimation>

       
        <ScrollAnimation animateIn="flipInX">
          <div className="project">


          <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">

                <CardItem translateZ="100" className="w-full mt-4">
                  <img
                    src={MLproject}
                    height="500"
                    width="500"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>

                <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/SalindaGunarathna/MachineLearnig_Project_Group95" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              
              <h3>Machinlernig project- predict student performance</h3>
              <p>
                This machine learning project aims to predict students' final grades by considering various factors using three different algorithms: Decision Trees, and Support Vector Machine (SVM). The prediction task is approached as both a classification and regression problem.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Python</li>
                <li>Numpy</li>
                <li>Sklearn</li>
                <li>Matplotlib</li>


              </ul>
            </footer>

                <div className="flex justify-between items-center mt-20">

                </div>
              </CardBody>
            </CardContainer>
           
          </div>
        </ScrollAnimation>


      </div>
    </Container>
  );
}