import { useContext, useEffect, useRef, useState } from "react";
//import { UserContext } from "./home";
import { globalContext } from "./app";
function Log(){
    let firstref=useRef(null);
    let secondref=useRef(null);
    const [equal,setequal]=useState("");
    //const [welcome,setWelcome]=useState(false);
    const{globalIsLogin, setGlobalIsLogin} = useContext(globalContext);


    useEffect(()=>{
        firstref.current.focus();
    });
    const formSubmit=(event)=>{
        event.preventDefault();
        console.log('Submitted');
        console.log(firstref.current.value);
        firstref.current.value='';
        secondref.current.value='';
    }
    const equity=(event)=>{
        if(firstref.current.value===secondref.current.value && firstref.current.value!==''){
            setequal("Successful");
            
            setGlobalIsLogin(true)
        }
        else if(firstref.current.value===''||secondref.current.value===''){
            setequal("Enter Details")
        }
        else{
            setequal("Incorrect password")
            //alert("Incorrect password");
        }
    }
    return(
        <div style={{ display: 'flex',alignItems:"center" ,justifyContent:"center",height: '50vh' }}>
        <div className="card" style={{width:"20rem"}}>
            <h4 style={{margin:"10px"}}>Login</h4>
            <p style={{margin:"10px"}}>Provide your Details</p>
            <div className="card-body">
                <h6 className="card-title"style={{margin:"5px"}}>College Id</h6>
                <form onSubmit={formSubmit} style={{display:"flex",flexDirection:"column"}}>
                <input type="text" ref={firstref} placeholder="College Id" style={{borderRadius:"5px",margin:"5px"}}/>
                <h6 className="card-title" style={{margin:"5px"}}>Password</h6>
                <input type="password" ref={secondref} placeholder="Password" style={{borderRadius:"5px",margin:"5px"}}/>
                <br></br>
                <button className="btn btn-dark" type="submit" onClick={equity}style={{margin:'5px'}} >Submit</button>
                <p>{equal}</p>
                </form>

            </div>
        </div>
        </div>
    );
}
export default Log;