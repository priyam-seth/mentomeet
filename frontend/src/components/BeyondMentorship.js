import React from 'react'

import '../sass/BeyondMentorship.scss'

import community from '../assets/img/Rectangle 33.png'
import qa from '../assets/img/Rectangle 34.png'
import seminar from '../assets/img/Rectangle 35.png'

export default function BeyondMentorship(){
    return(
        <div id='beyond-mentorship' className='container my-3 my-lg-5 py-4 py-lg-4 py-2'>
            <h1 className='text-center'>Beyond Mentorship</h1>
            <div className='row my-2 my-lg-5 pt-4 pt-lg-5'>
                <div className='col-12 col-md  d-flex justify-content-center'>
                    <div className='square px-1 pb-5 d-flex flex-column justify-content-end align-items-center'>
                        <img className='d-block' src={community} alt='team icon'></img>
                        <p className='d-block'>Community <br></br> Buildup</p>
                    </div>
                </div>
                <div className='col-12 col-md mt-4 mt-md-0 d-flex justify-content-center'>
                    <div className='square px-1 pb-5 d-flex flex-column justify-content-end align-items-center'>
                        <img src={qa} alt='journey icon'></img>
                        <p>Live Q & A</p>
                    </div>
                </div>
                <div className='col-12 mt-4 mt-md-0 col-md d-flex justify-content-center'>
                    <div className='square px-1 pb-5 d-flex flex-column justify-content-end align-items-center'>
                        <img src={seminar} alt='goal icon'></img>
                        <p>Expert's Talk</p>
                    </div>
                </div>
            </div>
        </div>
    )
}