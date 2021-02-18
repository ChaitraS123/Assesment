import React from 'react'

const Posts = (props) => {
    const { posts, handlePosts } = props
    const cancelposts = () => {
        handlePosts()
    }
    return (
        <div>
            {posts.length == 0 ? <div className="jumbotron" style={{ width: '70%', marginTop: '50px' }}>
                <h2>No posts found </h2>
                <h3>please add post</h3>
            </div> : <div >

                    {posts.map((el, i) => {
                        return <div className="jumbotron" style={{ width: '90%' }}>
                            <div className="card border-primary" style={{ width: "80%" }} key={i}>
                                <div className="card-body ">
                                    <p>Title-{el.title}</p>
                                    <p>Details-{el.body}</p>
                                </div>
                            </div>
                        </div>
                    })}

                </div>}
            <button className="btn btn-danger" onClick={cancelposts}>cancel seeing Posts</button>



        </div>
    )
}
export default Posts