import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { ArticleList } from './components/ArticleList'
import { NavBar } from './components/NavBar'
import { SearchBar } from './components/SearchBar'
import {Routes, Route} from "react-router"
import { ArticlePage } from './components/ArticlePage'

function App() {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div>
      <Header/>
      <NavBar/>
      <SearchBar setSearchTerm={setSearchTerm}/>
      <Routes>
        <Route path="/" element={<ArticleList searchTerm={searchTerm}/>}/>
        <Route path="/home" element={<ArticleList searchTerm={searchTerm}/>}/>
        <Route path="/articles" element={<ArticleList searchTerm={searchTerm}/>}/>
        <Route path="/articles/:article_id" element={<ArticlePage/>}/>
      </Routes>
    </div>
  )
}

export default App
