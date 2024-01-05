import { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { useNavigate } from "react-router-dom";

const Bloglist = ({blogs}) => {
  const history = useNavigate();
  const [blog, setBlogs] = useState(blogs);

  const handleDelete = (id) => {
    fetch("http://localhost:3000/Blogs/" + id, {
      method: "DELETE",
    })
      .then(() => {
        // Update the state by removing the deleted blog
        const newBlogs = blog.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
      })
      .catch((error) => {
        console.error("Error deleting blog:", error.message);
        // Handle error and inform the user
      });
  };

  return (
    <div className="blog-list">
          <CardActions>
            <Button
            variant="contained"
            onClick={()=>history('./create')}
            >Add new Blog</Button>
          </CardActions>
      {blog.map((blog) => (
        <Card key={blog.id} className="blog-preview">
          <CardContent>
            <Typography variant="h4" component="div">
              {blog.title}
            </Typography>
            <Typography variant="body2" paragraph>
              {blog.disc}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              color="error"
              onClick={() => handleDelete(blog.id)}
            >
              Delete
            </Button>
            <Button
              variant="contained"
              color="warning"
              onClick={() => history(`/blogdetails/${blog.id}`)}
            >
              Update
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default Bloglist;
