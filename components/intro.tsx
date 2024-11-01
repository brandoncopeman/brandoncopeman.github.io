import { section } from 'framer-motion/m'
import React from 'react'
import Image from 'next/image'


export default function Intro() {
  return (
    <section>
        <div className='flex items-center justify-center'>
            <div className='relative'>
               <p>
                <span className='font-bold '>
                    Hi I'm Brandon
                </span>
                <span className=''>
                    I'm a{" "}
                </span>
                <span className='italic '>
                    recent grad{" "}
                </span>
                <span className=''>
                    and{" "}
                </span>
                <span className='font-bold'>
                    full-stack developer{" "}
                </span>
                
                <span className=''>
                    I focus mainly on {" "}
                </span>
                <span className='font-bold'>
                Java, Python, and React{" "}
                </span>
                </p> 
                
                
            </div>
        </div>
    </section>
  );
}
