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
import { u } from "framer-motion/client";

const Home = () => {

  //const { username } = useParams();
  const username = "chandanr54"; // hardcoded for now, can be dynamic later
    const [skills, setSkills] = useState([]); 
    
    
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

  useEffect(() => {
    userSkills(username); // ✅ fetch skills on mount
    fetchUser(username); // ✅ fetch user data on mount
  }, [username]);
  
  console.log("User data in Home.jsx:", username); // ✅ log user data to verify it's being set

  const userSkills = (username)=>{
 api.getSkills(username)
      .then((response) => {
        console.log("Skills data:", response.data);
        setSkills(response.data); // ✅ set data here
      })
      .catch((error) => {
        console.error("Error fetching skills:", error);
      });
  }

    const fetchUser = (username) => {
       api.getUser(username)
        .then((response) => {
          setUser(response.data);
        })
        .catch((error) => {
          console.error("Error:", error);
          navigate("/"); // or NoUser page
        });
    }


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

        <Hero users={user?user:null}/>
        <About skills={skills}/>
        <Skills skills={skills} />
        <Projects userId={user?.id}/>
        <Contact users={user?user:null}/>

      </div>

      <Footer users={user?user:null} />
    </motion.div>
  );
};

export default Home;