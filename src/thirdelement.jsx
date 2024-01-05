import Bloglist from './bloglist';
import useFetch from './fetchdata';

const ThirdElement = () => {
  

    const {error, isPending, data: blogs} = useFetch('http://localhost:3000/Blogs');

    // const Bdelete = (id)=>{
    //     const newB = blogs.filter(blog => blog.id !==id );
    //     setBlogs(newB);

    // }
    return (
        <div className="third">
            {error && <div>{ error }</div>}
            {isPending && <div>Loading......</div>}
               {blogs && < Bloglist blogs={blogs} ></Bloglist>}
        </div>
        
    ); 
}

export default ThirdElement;
