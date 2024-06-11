import React, { useContext } from "react";
import sci from "../assets/scispot.png";
import book from "../assets/bookstore.png";
import crypto from "../assets/crypto.png";
import social from "../assets/ssss.png";
import { UserContext } from "../context/UserContext";

function Projects() {
  const {dark} = useContext(UserContext);
  return (
    <div className={dark?"dark":"light"}>
      <section id="/projects" className="py-20  dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-12 dark:text-white">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
              
              <ProjectCard
                
                title="SciSpot"
                image={sci}
                description="A MERN stack web app featuring secure user authentication and a user-friendly interface to showcase science articles with Cloudinary integration."
                link="https://science-spot-frontend.vercel.app/"
              />
              <ProjectCard
                title="Bookstore"
                image={book}
                description="A MERN stack application for managing bookstore inventory with full CRUD operations and an intuitive interface."
                link="https://books-frontend-fawn.vercel.app/"
              />
              <ProjectCard
                title="Crypto"
                image={crypto}
                description="A responsive React web app using the CoinGecko API to display real-time cryptocurrency data with search functionality."
                link="https://crypto-ten-mu.vercel.app/"
              />
              <ProjectCard
                
                title="PicShare"
                image={social}
                description="A web app for sharing photos, featuring functionalities for liking, commenting, and secure user login."
                link="https://crypto-ten-mu.vercel.app/"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const ProjectCard = ({ title, image, description, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <div className="hover:shadow-2xl hover:-translate-y-1 hover:scale-105 transition-transform duration-300 ">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden dark:bg-slate-700">
        <img src={image} alt={title} className="w-full h-48" />
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-800  mb-4 dark:text-white">{title}</h3>
          <p className="text-lg text-gray-700 dark:text-white">{description}</p>
        </div>
      </div>
    </div>
  </a>
);

export default Projects;
