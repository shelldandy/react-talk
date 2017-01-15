import React from 'react';
import { ContentSlide, Step } from 'react-presents';
import styled from 'styled-components';
import pixel from '../../public/pixel2html.svg'

const HeartIcon = styled.i`
  color: #f92672;
`;

const slide = () => (
  <ContentSlide>
    <h1>{slide.title}</h1>
    <ul>
      <Step index={1}>
        <li>
          <a href='http://pixel2html.com/' target='_blank'>
            <img
              src={pixel}
              role='presentation'
              alt='Pixel2Html Logo'
              width='150px'
            />
          </a>
        </li>
      </Step>
      <Step index={2}>
        <li>
          Frontend Nerd (Charlemos!)
        </li>
      </Step>
      <Step index={3}>
        <li>
          I <HeartIcon className='fa fa-heart' /> Open Source 
          <a href='https://github.com/mike3run' target='_blank'>https://github.com/mike3run</a>
        </li>
      </Step>
      <Step index={4}>
        <li>
          <a href='https://github.com/mike3run/ground-zero'>Ground-Zero</a>
        </li>
      </Step>
      <Step index={5}>
        <li>
          <a href='https://github.com/Pixel2HTML/wp-nextjs'>wp-nextjs</a>
        </li>
      </Step>
      <Step index={6}>
        <li>
          <a href='https://github.com/mike3run/manila-mixins'>Manila Mixins</a>
        </li>
      </Step>
    </ul>
  </ContentSlide>
);

slide.title = 'Sobre mi...';

export default slide;
