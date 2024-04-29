import axios from "axios";

let jwtToken=localStorage.getItem('Token');
const authheader=`Bearer${jwtToken}`;
console.log(jwtToken);
const headers={
    'Authorization':authheader,
    'Content-Type':'application/json',
};

// const URI="http://localhost:8080";
const URI="http://65.0.96.196:8080";

const userregister=(register)=> axios.post(`${URI}/auth/signup`,register)
const userlogin=(logdata)=> axios.post(`${URI}/auth/login`,logdata)
const getuserdata=()=>axios.get(`${URI}/auth/getuserdata`)
const getuserdatabyid=(userid)=>axios.get(`${URI}/auth/getuserdata/${userid}`)
const edituser=(uid,user)=>axios.put(`${URI}/auth/edituser/${uid}`,user)

const getjob=()=> axios.get(`${URI}/auth/getjob`)
const getjobbyid=(id)=> axios.get(`${URI}/auth/getjob/${id}`,id)
// const getproductbyname=(pname)=> axios.get(`${URI}/auth/getproductname/${pname}`,{headers})
// const getproductbycat=(pcategory)=> axios.get(`${URI}/auth/getproductcategory/${pcategory}`,{headers})
const addjob=(job)=> axios.post(`${URI}/auth/addjob`,job,{headers})
const editjob=(id,job)=> axios.put(`${URI}/auth/updatejob/${id}`,job,{headers})
const deletejob=(id)=> axios.delete(`${URI}/auth/deletejob/${id}`,{headers})


const addapply=(apply,userid)=>axios.post(`${URI}/auth/postapply/${userid}`,apply,{headers})
const getapply=()=>axios.get(`${URI}/auth/getapply`)
const getapplybyid=(aid)=> axios.get(`${URI}/auth/getapply/${aid}`,aid)
const getuserapply=(aid)=> axios.get(`${URI}/auth/getuserapply/${aid}`,aid)
const editapply=(aid,uid,apply)=>axios.put(`${URI}/auth/updateapply/${aid}/${uid}`,apply)
const editstatus=(aid,status)=>axios.put(`${URI}/auth/updatestatus/${aid}/${status}`,null,{headers})
const deleteapply=(id)=> axios.delete(`${URI}/auth/deleteapply/${id}`,{headers})

// const getreview=()=> axios.get(`${URI}/auth/getreview`)
// const addreview=(rev)=> axios.post(`${URI}/auth/postreview`,rev)
// const deleterev=(rid)=> axios.delete(`${URI}/delete/${rid}`,{headers})

export{userregister,userlogin,getuserdata,getuserdatabyid,edituser,addjob,editjob,editapply,getuserapply,editstatus,deletejob,getjob,getjobbyid,addapply,getapply,getapplybyid,deleteapply}