import React from 'react'
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <a href='https://www.linkedin.com/in/javier-yurrita-coll-753241127/' target='_blank' rel='noreferrer'>
          <AiFillLinkedin />
          </a>
        </div>
        <div>
        <a href='https://github.com/jyurri' target='_blank' rel='noreferrer'>
          <AiFillGithub />
        </a>
        </div>
    </div>
  )
}

export default SocialMedia