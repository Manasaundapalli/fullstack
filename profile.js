import {  useContext } from "react";
import Navigation from "./navigation";
import { globalContext } from "./app";


function Profile(){
    //const {profile,setprofile}=useContext(globalContext);
    //const [check,setcheck]=useState(true)
    const{globalUserObject, setGlobalUserObject} = useContext(globalContext);
    const{globalIsLogin, setGlobalIsLogin} = useContext(globalContext);
    const logOutAction =() => {
        setGlobalIsLogin(false);
    }
    return(
        <div>
        
            <Navigation/>
            <div  className = "container - card" style={{display:'flex', gap:'20px',flexDirection:'column',width:'400',padding:'20px'}}>
            {globalUserObject.selectedBranch}
            <button className="btn btn-secondary" onClick={logOutAction}>Logout</button>
            </div>
        </div>
        
    );
}
export default Profile;