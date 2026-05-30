import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import * as api from "../service/api";


import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { em, g, s, u } from "framer-motion/client";
import { skillsData,username } from "../constants/Const";

const Home = () => {

 


  //const { username } = useParams();
  //const username = "chandan54"; // hardcoded for now, can be dynamic later
   const [skills, setSkills] = useState([]); 
    
    
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

  useEffect(() => {
   // userSkills(username); // ✅ fetch skills on mount
    //fetchUser(username); // ✅ fetch user data on mount

    setSkills(skillsData);
      setUser(username);
  }, [username,skillsData]);
  
 //console.log("User data in Home.jsx:", username); // ✅ log user data to verify it's being set
 // console.log("User Skill in Home.jsx",skills)
//   const userSkills = (username)=>{
//  api.getSkills(username)
//       .then((response) => {
//         console.log("Skills data:", response.data);
//         setSkills(response.data); // ✅ set data here
//       })
//       .catch((error) => {
//         console.error("Error fetching skills:", error);
//       });
//   }

//     const fetchUser = (username) => {
//        api.getUser(username)
//         .then((response) => {
//           setUser(response.data);
//         })
//         .catch((error) => {
//           console.error("Error:", error);
//           navigate("/"); // or NoUser page
//         });
//     }


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="scroll-smooth"
    >
      <Navbar />

      {/* Add top spacing because navbar is fixed */}
      <div className="pt-15">

        {/* <Hero users={user?user:null}/> */}

         <Hero users={user?user:null}/>
        <About skills={skills}/>
        <Skills skills={skills} />
        <Projects userId={1}/>
   <Contact users={user?user:null}/> 
       

      </div>

      <Footer users={username} />
    </motion.div>
  );
};

export default Home;