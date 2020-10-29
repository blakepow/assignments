import React from 'react'

import Navbar from './Navbar'

export default function Header() {
    return (
        <div>
            <div className=''>
                <Navbar/>
                <div className='head'>
                    <h1>Clean Blog</h1>
                    <h3>A Blog Theme by Start Bootstrap</h3>
                </div>
            </div>
        </div>
    )
}
