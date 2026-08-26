import { useContext } from "react";
import { UserContext } from "../Context/Context";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

function Home(){
    const {user} = useContext(UserContext);
    const Navigate = useNavigate();
    const value = useLocation();
    console.log(value)
    return(
        <div>
            <h1>Welcome, {!user? "Guest" : user}..!</h1>
            {
                !user?
                (<button onClick={()=>Navigate('/form')}>Sign In</button>)
                :
                null
            }

            <p>Name: {value.state.name}</p>
        </div>
    )
}
export default Home;


export function PlayGround(){
    return (
        <div>
            <Outlet /> 
            <p>This IS Yaaarooo...</p>
        </div>
    )
}

function DisplayName(){
    return(
        <h1>Sakthi</h1>
    )
}

