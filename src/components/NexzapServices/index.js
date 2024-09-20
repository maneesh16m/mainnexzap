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
        We are a team of engineers who love building tools for other
          engineers. Our goal is to create the email platform we've always
          wished we had — one that just works.
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