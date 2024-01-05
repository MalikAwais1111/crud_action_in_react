import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";


const Create = () => {
  const [title, settitle] = useState('');
  const [disc, setdisc] = useState('');
  const [author, setauthor] = useState('');
  const [pending, setpending] = useState(false);
  const navigate = useNavigate();
  const id = useRef(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const blog = { title, author, disc };
    setpending(true);

    fetch('http://localhost:3000/Blogs', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    })
      .then(() => {
        console.log("Submitted");
        setpending(false);
        navigate('/');
      });
  };

  return (
    <div ref={id} className="create">
      <form onSubmit={handleSubmit}>
        <TextField
          label="Blog Title"
          type="text"
          required
          value={title}
          onChange={(e) => settitle(e.target.value)}
          fullWidth
          margin="normal"
        />

        <TextField
          label="Blog Body"
          type="textarea"
          required
          value={disc}
          onChange={(e) => setdisc(e.target.value)}
          fullWidth
          margin="normal"
          multiline
        />

        <TextField
          label="Blog author"
          type="text"
          required
          value={author}
          onChange={(e) => setauthor(e.target.value)}
          fullWidth
          margin="normal"
        />
        {!pending && <Button type="submit" variant="contained" color="primary">Submit</Button>}
        {pending && <Button disabled variant="contained" color="primary">Submitting...</Button>}
      </form>
    </div>
  );
};

export default Create;
