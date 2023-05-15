import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedLetters from '../AnimatedLetters'
import './index.scss';
import { useState, useEffect } from 'react';
import { faAngular, faBootstrap, faCss3, faGitAlt, faHtml5, faJs, faJsSquare, faReact, faUnity } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
      let timeout;
    
      timeout = setTimeout(() => {
        setLetterClass("text-animate-hover");
      }, 3000);
    
      return () => {
        clearTimeout(timeout);
      };
    }, []);

    return (
      <>
        <div className='container about-page'>
            <div className='text-zone'>
                 <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray = {['A', 'b', 'o' , 'u', 't', ' ', 'm', 'e']}
                    idx={15}
                    />
                 </h1>
                 <p> I am very ambitious full stack developer looking for a role in 
                    established IT company with the opportunity to work with the latest 
                    technologies on challenging and diverse projects.  
                 </p>
                 <p> {''}
                 I am quitely confident, naturally curious, and perpetually working 
                 on improving my chops one design problem at a time. </p>
                 <p>
                    If i need to  define myself in one sentence that would be a adaptable. 
                    Enthusiast, interested in learning new things and tech-obsessed. 
                 </p>
            </div>
            <div className='stage-cube-cont'>
              <div className='cube-spinner'>
                <div className='face1'>
                  <FontAwesomeIcon icon={faAngular} color='#DD0031'/>
                </div>
                <div className='face2'>
                  <FontAwesomeIcon icon={faHtml5} color='#F06529'/>
                </div>
                <div className='face3'>
                  <FontAwesomeIcon icon={faCss3} color='#28A4D9'/>
                </div>
                <div className='face4'>
                  <FontAwesomeIcon icon={faReact} color='5ED4F4'/>
                </div>
                <div className='face6'>
                  <FontAwesomeIcon icon={faGitAlt} color='#EFD81D'/>
                </div>
                <div className='face6'>
                  <FontAwesomeIcon icon={faUnity} color='#EC4D28'/>
                </div>
                 <div className='face7'>
                  <FontAwesomeIcon icon={faJsSquare} color='#28A4D9'/>
                </div>
                <div className='face8'>
                  <FontAwesomeIcon icon={faBootstrap} color='#28A4D9'/>
                </div>


                
        </div>
        </div>
        </div>
        <Loader type='pacman' />
     </>
    )

}


export default About