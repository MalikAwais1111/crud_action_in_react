import { useParams } from "react-router-dom";
import useFetch from "./fetchdata";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const BlogDetails = () => {
    const history = useNavigate();
    const { id } = useParams();
    const { data: blog, isPending, error } = useFetch('http://localhost:3000/Blogs/' + id);
    const [desc, setDesc] = useState('');

    useEffect(() => {
        // Set the initial description when data is loaded
        if (blog) {
            setDesc(blog.disc);
        }
    }, [blog]);

    const handleUpdate = () => {
        fetch('http://localhost:3000/Blogs/' + blog.id, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...blog, disc: desc })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to update blog');
                }
            })
            .then(() => {
                history('/');
            })
            .catch(error => {
                console.error('Error updating blog:', error.message);
            });
    };

    const handleDelete = () => {
        fetch('http://localhost:3000/Blogs/' + blog.id, {
            method: 'DELETE'
        })
            .then(() => {
                history('/');
            })
            .catch(error => {
                console.error('Error deleting blog:', error.message);
            });
    };

    return (
        <div className="blogdetails">
            {isPending && <div>Loading.....</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <div className="blog-content">
                        <TextField
                            className="inpt"
                            label="Blog Content"
                            multiline
                            fullWidth
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                        />
                        <Box mt={2}>
                            <Button
                                variant="contained"
                                color="error"
                                onClick={handleDelete}
                                style={{ marginRight: 10 }}
                            >
                                Delete Blog
                            </Button>
                            <Button
                                variant="contained"
                                color="warning"
                                onClick={handleUpdate}
                            >
                                Update Blog
                            </Button>
                        </Box>
                    </div>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;
