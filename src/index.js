import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import EventExamples from './components/EventExamples'
import books from './books'
import Book from './components/book'

const BookList = () => {
  return (
    <>
      <h1>Best Sellers</h1>
      <section className="booklist">
        {books.map((book, index) => {
          return <Book {...book} key={book.id} number={index} />
        })}
      </section>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
