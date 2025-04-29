import React from 'react'
import ItemList from '../components/ItemList'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SearchBar from '../components/SearchBar'

export default function Home() {
  return (
    <div>
        <Header />
        <SearchBar />
        <ItemList />
        <Footer />
    </div>
  )
}
