import './App.css';
import axios from "axios";
import React from "react";

const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts"
});
    let urlHead = "/1";
export default function App() {
  const [post, setPost] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    async function getPost() {
      const response = await client.get(urlHead);
      setPost(response.data);
    }
    getPost();
  }, []);

  function createPost() {
    client.post("",{
      title: "Hello everybody!",
      body: "This is a new post."
    }).then((response) => {
      setPost(response.data);
    })
  }

  function updatePost() {
    client.put(urlHead, {
      title: "Hello everyone!",
      body: "This is an updated post."
    }).then((response) => {
      setPost(response.data);
    })
  }

  function switchPost() {
    client.get("/a").then((response) => {
      setPost(response.data);
    }).catch(error => {
      setError(error);
    });
  }

  async function deletePost() {
    await client.delete(urlHead);
    alert("Post deleted!");
    setPost(null);
  }

  if(error) return `Error: ${error.message}`;
  if(!post) return "No post!";

  return (
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <button onClick={createPost}>Create Post</button>
        <button onClick={updatePost}>Update Post</button>
        <button onClick={deletePost}>Delete Post</button>
        <button onClick={switchPost}>Broken Post</button>
      </div>
  );
}
