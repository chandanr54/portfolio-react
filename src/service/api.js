import axios from "axios";

console.log("Service Run")
//  http://localhost:8080/api/v1/user/chandan54
const BASE_URL = ' http://13.60.169.122:8080';
const USER_URL = `${BASE_URL}/api/v1/user/`;
const SKILL_URL = `${BASE_URL}/api/v1/skill/`;
const PROJECTS_URL = `${BASE_URL}/api/v1/project/`;


const createHeaders = () => {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return headers;
}

export const getUser=(username)=> axios.get(`${USER_URL}${username}`);


export const getSkills=(username)=> axios.get(`${SKILL_URL}username/${username}`);

export const getProjects=(userId)=> axios.get(`${PROJECTS_URL}byuserid?userId=${userId}`);


