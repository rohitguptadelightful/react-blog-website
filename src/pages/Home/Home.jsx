import React, { useState } from 'react'
import EmptyList from '../../components/common/EmptyList/EmptyList'
import BlogList from '../../components/Home/BlogList/BlogList'
import Header from '../../components/Home/Header/Header'
import SearchBar from '../../components/Home/SearchBar/SearchBar'
import { blogList } from '../../config/data'

const Home = () => {
  const [blogs, setBlogs] = useState(blogList)
  const [searchKey, setSearchKey] = useState('')

  // Search Submit
  const handleSearchSubmit = event => {
    event.preventDefault()
    handleSearchresults()
  }

  // Search for blogs any category
  const handleSearchresults = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter(blog => blog.category.toLowerCase().includes(searchKey.toLowerCase().trim()))
    setBlogs(filteredBlogs)
  }

  const handleClearSearch = () => {
    setBlogs(blogList)
    setSearchKey('')
  }

  return (
    <div>
      {/* Page Header */}
      <Header />

      {/* Search Bar */}
      <SearchBar value={searchKey} clearSearch={handleClearSearch} formSubmit={handleSearchSubmit} handleSearchKey={e => setSearchKey(e.target.value)} />

      {/* Blog List & Empty List */}
      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
    </div>
  )
}

export default Home