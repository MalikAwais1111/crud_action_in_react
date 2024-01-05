import { Link } from "react-router-dom";

const NavBar = () => {
    // const clickedme =()=>{
    //         console.log("Clicked");
    // }
    // const againclicked = (name)=>{
    //     console.log("clickedAgain"+name);
    // }
    return (  
        <nav className="navbar">
            {/* <div className="title">
                <h1>Hello everyone</h1>
            </div>
            <div className="links">
                <button onClick={clickedme}>Click me</button>
                <button onClick={()=> againclicked("Awais")} >Click Again</button>
                <Link onClick={clickedme} to="/">Home</Link>
                
                <Link to="/create">Blosg</Link> */}
            {/* </div> */}
            <div className="logo" >Awaree</div>
            <div className="searchbar">
                <input type="text" placeholder="Search" />
            </div>
            <div className="right" >
                <Link>contact</Link>
                <Link>cartimg</Link>
            </div>
        </nav>
    );
}
 
export default NavBar;