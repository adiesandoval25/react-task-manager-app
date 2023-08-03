import { Link } from "react-router-dom";

const Missing = () => {
    return (
        <main className="Missing">
            <h2>Page Not Found</h2>
            <p> Error 404 </p>
            <p> 
                <Link to='/'> <button className="backButtonError"> Back </button></Link>             
            </p>
        </main>
    )
  };
  
  export default Missing;