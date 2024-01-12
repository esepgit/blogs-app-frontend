import { useState } from "react"

const Blog = ({ blog }) => {
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

  return (
      <div style={blogStyle}>
        {blog.title} {blog.author}{" "}
        <button onClick={handleVisibility}>
          {showDetails ? "hide" : "view"}
        </button>
        <div style={showDetails ? showWhenShowDetails : hideWhenShowDetails}>
          <div>{blog.url}</div>
          <div>
            likes {blog.likes} <button>like</button>
          </div>
          <div>{blog.user.name}</div>
        </div>
      </div>
  );
}

export default Blog