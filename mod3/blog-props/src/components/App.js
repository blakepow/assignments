import React from 'react'

import BlogList from './BlogList'
import data from './info'
import Header from './Header'
import Footer from './Footer'

export default function App() {
  const entries = data.map(
    entry => <BlogList
      title = {entry.title}
      subTitle = {entry.subTitle}
      author = {entry.author}
      date = {entry.date}
    />
  )
  


  return (
    <div>
      <Header/>
      {entries}
      <button className='nextPage'>Older Post</button>
      <Footer/>
    </div>
  )
}

