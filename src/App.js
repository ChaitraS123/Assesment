import React, { useState, useEffect } from 'react'
import Form from './Form'
import Posts from './Posts'
import './App.css'
import Search from './Search'
import { FiDelete } from 'react-icons/fi'
import { ImSearch } from 'react-icons/im';
function App() {
  const [input, setInput] = useState('')
  const [formtoggle, setFormtoggle] = useState(false)
  const [posttoggle, setpostToggle] = useState(false)
  const [posts, setPosts] = useState([])
  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts))
  }, [posts])
  useEffect(() => {
    const result = JSON.parse(localStorage.getItem("posts")) || []
    setPosts(result)
  }, [])

  const addpost = (data) => {
    const res = [...posts, data]
    setPosts(res)

  }

  const handleChange = (e) => {
    setInput(e.target.value)

  }

  const handleformtoggle = () => {
    setFormtoggle(!formtoggle)
  }
  const handlePosts = () => {
    setpostToggle(!posttoggle)
  }
  const filter = () => {
    const res = posts.filter((el) => {
      return el.title.toLowerCase().includes(input) || el.body.toLowerCase().includes(input)
    })
    return res
  }
  const deleteinput = () => {
    setInput('')
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="input-group mb-3">
          <div class="input-group-prepend">
            <i class="input-group-text"><ImSearch /></i>
          </div>
          <input type="text" className="form-control" value={input} placeholder="search" onChange={handleChange} /><br />
          <div class="input-group-append">

            <button className="brn btn-danger" onClick={deleteinput}><FiDelete /></button>
          </div>
        </div>
      </nav>
      {input.length > 0 && <Search posts={filter()} />}
      <button className="btn btn-outline-primary btn-lg" onClick={handleformtoggle}>Add New Post</button>
      <button className="btn btn-outline-primary btn-lg" onClick={handlePosts}>Published Posts</button>
      <div className="row">
        {formtoggle && <div className="col-md-6">
          <Form addpost={addpost} handleformtoggle={handleformtoggle} />
        </div>}
        {posttoggle && <div className="col-md-6">
          <Posts posts={posts} handlePosts={handlePosts} />

        </div>}

      </div>

    </div>
  );
}

export default App;
