import { useState } from "react"

const Blog = ({ blog, updateLikes }) => {
  const [showDetails, setShowDetails] = useState(false)

  const hideWhenShowDetails = { display: "none"};
  const showWhenShowDetails = { display: ""};

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const handleVisibility = () => {
    setShowDetails(!showDetails)
  }

  const handleLike = (id) => {
    const likes = blog.likes + 1
    const blogObject = {
      title: blog.title,
      author: blog.author,
      url: blog.url,
      likes: likes
    } 
    updateLikes(id, blogObject);
  };

  return (
      <div style={blogStyle}>
        {blog.title} {blog.author}{" "}
        <button onClick={handleVisibility}>
          {showDetails ? "hide" : "view"}
        </button>
        <div style={showDetails ? showWhenShowDetails : hideWhenShowDetails}>
          <div>{blog.url}</div>
          <div>
            likes {blog.likes} <button onClick={() => handleLike(blog.id)}>like</button>
          </div>
          <div>{blog.user.name}</div>
        </div>
      </div>
  );
}

export default Blog