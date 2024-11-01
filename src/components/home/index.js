import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LogoTitle from '../../assets/images/logo-s.png';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Logo from './logos/index.js';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = ['b', 'd', 'e', 'r', 'r', 'a', 'h', 'm', 'a', 'n', 'e'];
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <div className='container home-page'>
      <div className='text-zone'>
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _12`}>I</span>
          <span className={`${letterClass} _12`}>'m</span>
          <img src={LogoTitle} alt='developer' />
          <AnimatedLetters letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters letterClass={letterClass}
            strArray={jobArray}
            idx={22}
          />
        </h1>
        <h2>Frontend Developer / Javascript Expert / YouTuber</h2>
        <Link to="/contact" className='flat-button'>CONTACT ME</Link>
      </div>
      <Logo/>
    </div>
  )
}

export default Home;