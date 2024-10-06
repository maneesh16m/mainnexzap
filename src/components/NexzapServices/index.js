import React from 'react'
import { Container, Wrapper, Title, Desc, CardContainer } from './ServiceStyle'
import ServiceCard from '../Cards/ServiceCards'
import { Services } from '../../data/constants'


const NexzapServices = ({openModal,setOpenModal}) => {
  return (
    <Container id="services">
      <Wrapper>
        <Title>Services</Title>
        <Desc className='mb-3'>
        At NEXZAP, our commitment is to innovation, offering businesses the tools they need to stay ahead of the curve in an ever-evolving digital landscape.
        </Desc>
        <CardContainer>
          {Services
            .map((project) => (
              <ServiceCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}

        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default NexzapServices