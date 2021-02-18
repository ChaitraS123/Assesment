import React from 'react'

const Search = (props) => {
    const { posts } = props
    return (
        <div>
            {posts.length === 0 ? <h2>No post found related to your search</h2> :
                <div>
                    {posts.map((el, i) => {
                        return <div key={i}>
                            <h4>Title-{el.title}</h4>
                            <h5>Details-{el.body}</h5>
                            <hr />
                        </div>
                    })}

                </div>
            }


        </div>
    )
}
export default Search