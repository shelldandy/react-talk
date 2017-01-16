import React from 'react'
import { ContentSlide, Step } from 'react-presents'
import options from '../../public/options.png'
import bismuto from '../../public/bismuto.png'

const slide = () => (
  <ContentSlide>
    <h1>{slide.title}</h1>
    <Step index={1} maxIndex={5}><p>Maneras de poder pensar en React y usar React para sobrevivir en equipo</p></Step>
    <ul>
      <Step index={2} maxIndex={5}><li>Porque la libertad que da React puede ser intimidante</li></Step>
      <Step index={3} maxIndex={5}><li>Porque con un gran poder hay una gran responsabilidad 🤠</li></Step>
      <Step index={4} maxIndex={5}><li>Porque cuando estás iniciando todo puede llegar a ser sumamente abrumador</li></Step>
      <Step index={5} maxIndex={5}><li><img src={options} role='presentation' alt='Que locura' /></li></Step>
      <Step index={6}><div>
        <li>Porque por algún motivo un cristal de Bismuto fue la mejor analogía para explicar componentes y Redux...</li>
        <li><a href='https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.j3jz0lruq'><img src={bismuto} alt='Bismuto...' /></a></li>
      </div>
      </Step>
    </ul>
  </ContentSlide>
)

slide.title = '¿De qué vamos a hablar?'

export default slide
