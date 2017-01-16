import React from 'react'
import { ContentSlide, Step } from 'react-presents'
import styled from 'styled-components'
import pixel from '../../public/pixel2html.svg'

const HeartIcon = styled.i`
  color: #f92672;
`

const slide = () => (
  <ContentSlide>
    <h1>{slide.title}</h1>
    <Step index={1}>
      <p>
        <a href='http://pixel2html.com/' target='_blank'>
          <img
            src={pixel}
            role='presentation'
            alt='Pixel2Html Logo'
            width='150px'
          />
        </a>
      </p>
    </Step>
    <Step index={2}>
      <p>
        Frontend Nerd (Charlemos!)
      </p>
    </Step>
    <Step index={3}>
      <p>
        I <HeartIcon className='fa fa-heart' /> Open Source
        <a href='https://github.com/mike3run' target='_blank'> https://github.com/mike3run</a>
      </p>
    </Step>
    <Step index={4}>
      <p>
        <a href='https://github.com/mike3run/ground-zero'>Ground-Zero</a>
      </p>
    </Step>
    <Step index={5}>
      <p>
        <a href='https://github.com/Pixel2HTML/wp-nextjs'>wp-nextjs</a>
      </p>
    </Step>
    <Step index={6}>
      <p>
        <a href='https://github.com/mike3run/manila-mixins'>Manila Mixins</a>
      </p>
    </Step>
  </ContentSlide>
)

slide.title = 'Sobre mi...'

export default slide
