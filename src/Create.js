import { useState } from "react";
import {useHistory} from 'react-router-dom';
const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {title,body,author};
    fetch('http://localhost:8000/blogs',{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(blog)
    })
    .then(()=>{
        console.log('new blog added');
        history.push("/")
      }
    )
  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>

        <label>Blog title : </label>
        <input type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Blog Body :</label>
        <textarea name="" id="" cols="30" rows="10" required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label htmlFor="">Blog author : </label>
        <select name="" id=""
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        <button>Add Blog</button>
        {/* <p>{title}</p> */}
      </form>
    </div>
  );
}

export default Create;