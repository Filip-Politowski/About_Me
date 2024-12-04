import React from 'react';
import './github.scss';
import GithubIcon from '../../../assets/images/github.svg';

const Github = () => {
  return (
    <div className='github'>
      <div className='background-for-img'>
        <a href="https://github.com/Filip-Politowski" target="_blank" rel="noopener noreferrer">
          <img src={GithubIcon} alt="GitHub"/>
        </a>
      </div>
    </div>
  );
}

export default Github;
