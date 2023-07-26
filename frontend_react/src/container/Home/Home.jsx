import React from 'react'
import Hero from '../../components/Hero/Hero'
import { images } from '../../constants'


const Home = () => {
  return (
    <>
   
    <Hero
    cName="hero"
    heroImg={images.MainPage}
    title="Design and Class"
    text="The best option for your business"
    buttonText="lets try"
    url="/"
    btnClass="show"/>    
    </>
    
  )
}

export default Home