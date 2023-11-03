import React from 'react'
import { useSelector } from 'react-redux'
import { seslectAllNews } from '../../features/newsSlice'

import '../../sass/News.scss'

export default function News() {
  const news = useSelector(seslectAllNews)
  console.log(news)
  return (
    <section className='News'>
      <h1 className='Title'>
        Latest news
      </h1>
      <div className="News-container">
        {news.map(elem => {
          return (
            <div className="items" key={elem.id}>
              <img src={elem.image} />
              <div className="items-info">
                <h3>{elem.title}</h3>
                <p>{elem.description}</p>
                <button>Read more</button>
              </div>

            </div>
          )
        })}
      </div>




    </section>
  )
}
