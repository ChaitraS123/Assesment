import React, { useState } from 'react'

const Form = (props) => {
    const { addpost, handleformtoggle } = props
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [formerror, setformError] = useState({})
    const errors = {}
    const runValidation = () => {
        if (title.length === 0) {
            errors.title = "Title cannot be empty"
        }
        if (body.length === 0) {
            errors.body = "Please add details"
        }
    }
    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }
    const handleBodyChange = (e) => {
        setBody(e.target.value)
    }
    const handlecancel = () => {
        handleformtoggle()
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        runValidation()
        if (Object.keys(errors).length == 0) {
            setformError({})
            const data = { title: title, body: body }
            addpost(data)
            setTitle('')
            setBody('')
        }
        else {
            setformError(errors)
            setTitle('')
            setBody('')
        }
    }
    return (
        <div>
            <div className="card" style={{ width: '70%', marginLeft: '20px', marginTop: '30px' }}>
                <div className="card-body">
                    <h2 style={{ textAlign: "center" }}>Add Post</h2>
                    <form onSubmit={handleSubmit}>
                        <label for="addpost">Add Title of the post</label><br />
                        {formerror.title ? <input type="text" className="form-control is-invalid " value={title} onChange={handleTitleChange} /> : <input type="text" className="form-control " value={title} onChange={handleTitleChange} />}

                        {formerror.title && <span style={{ color: 'red', fontSize: '10px' }}>{formerror.title}</span>}<br />
                        <label for="add details">Add Details</label><br />
                        {formerror.body ? <textarea value={body} className="form-control is-invalid" onChange={handleBodyChange} /> : <textarea value={body} className="form-control " onChange={handleBodyChange} />}
                        {formerror.body && <span style={{ color: 'red', fontSize: '10px' }}>{formerror.body}</span>}<br />
                        <input className="btn btn-outline-primary" type="submit" value="publish" />
                        <button className="btn btn-outline-danger" onClick={handlecancel}>cancel</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Form