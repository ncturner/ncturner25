import React from 'react';
import BioPic from '../../assets/imgs/bio.jpg'
import {FaLinkedin} from 'react-icons/fa'
import {FaDribbbleSquare} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import { HomeContainer, HomeBkgd, HomePic, HomeHeadline, HomeContent, Footer, FooterMain, FooterText, FooterLinks, FooterLink } from './HomeSectionElements';

const HomeSection = () => {
  return (
    <HomeContainer>
      <HomeBkgd>
        <HomePic>
            <img src={BioPic} alt="Nick Turner" />
        </HomePic>
      </HomeBkgd>
      <HomeHeadline>
        Nick Turner is a product design leader <br /> in Chattanooga, TN. 
      </HomeHeadline>
      <HomeContent>
        <p>Nick is a strategic product design leader with 15+ years of experience specializing in transforming complex 
        business objectives into intuitive experiences that exceed user expectations and deliver against strategic 
        business goals. He has collaborated with industry leaders such as Ford, Rocket Mortgage, Salesforce, Mailchimp, 
        and Twilio.</p>
  
        <p>As a Principal Product Designer at <a href="https://www.buildium.com/" target="blank">Buildium</a>, Nick focuses 
        on product strategy and creates scalable property management solutions while leading cross-functional teams in 
        a fast-paced environment. His human-centered design approach incorporates comprehensive user research methodologies 
        that foster deep customer empathy and bring product vision to life. He also mentors associate designers and plays 
        a key role in developing and maintaining Buildium's enterprise design system.</p>
        
        <p>Nick likes to design software products for humans, make electronic music on synthesizers, fly fish &amp; bake homemade pizzas.</p>
      </HomeContent> 
      <Footer>
        <FooterMain>
          Don't hesitate to investigate!
        </FooterMain>
        <FooterText>
          Say hi and see what I'm up to.
        </FooterText>
        <FooterLinks>
          <FooterLink><a href="mailto: nicholas.c.turner@gmail.com"><MdEmail /></a></FooterLink>
          <FooterLink><a href="https://www.linkedin.com/in/nickcturner" target="blank"><FaLinkedin /></a></FooterLink>
          <FooterLink><a href="https://dribbble.com/ncturner" target="blank"><FaDribbbleSquare /></a></FooterLink> 
        </FooterLinks>
      </Footer>
    </HomeContainer>
  )
}

export default HomeSection