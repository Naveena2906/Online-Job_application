import axios from "axios";

let jwtToken = localStorage.getItem("Token");
const authheader = `Bearer${jwtToken}`;
console.log(jwtToken);
const headers = {
  Authorization: authheader,
  "Content-Type": "application/json",
};
const URI = "http://localhost:8080";

const userregister = (register) => axios.post(`${URI}/auth/signup`, register);
const userlogin = (logdata) => axios.post(`${URI}/auth/login`, logdata);
const userdata = () => axios.get(`${URI}/auth/getuserdata`);

const getjob = () => axios.get(`${URI}/auth/getjob`);
const addjobs = (prod) => axios.post(`${URI}/auth/postjob`, prod, { headers });
const editjob = (jid, prod) =>axios.put(`${URI}/auth/update/${jid}`, prod, { headers });
const deletejob = (jid) =>axios.delete(`${URI}/auth/delete/${jid}`, { headers });

const addskills = (prod) =>axios.post(`${URI}/auth/postskill`, prod, { headers });
const addexperiences = (prod) =>axios.post(`${URI}/auth/postexperience`, prod, { headers });

const getadminjob = () => axios.get(`${URI}/auth/getadminjob`);
const getjobbyid = (id) => axios.get(`${URI}/auth/getadminjob/${id}`, id);
const addadminjob = (job) =>axios.post(`${URI}/auth/addadminjobs`, job, { headers });
const editadminjob = (id, job) =>axios.put(`${URI}/auth/updateadminjob/${id}`, job, { headers });
const deleteadminjob = (id) =>axios.delete(`${URI}/auth/deleteadminjob/${id}`, { headers });

const addreview = (job) => axios.post(`${URI}/auth/postreview`, job, { headers });
const getreview = () => axios.get(`${URI}/auth/getreview`);

const edujobs = async (qualification) => {
  try {
    const response = await axios.post(`${URI}/auth/postedujob`, qualification, {
      headers,
    });
    return response;
  } catch (error) {
    throw error;
  }
};
// const edujobs = (qualification) => axios.post(`${URI}/auth/postedujob`,qualification,{headers});

export {
  userregister,
  userlogin,
  userdata,
  getjob,
  addjobs,
  editjob,
  deletejob,
  edujobs,
  addskills,
  addexperiences,
  getadminjob,
  getjobbyid,
  addadminjob,
  editadminjob,
  deleteadminjob,
  addreview,
  getreview
};
