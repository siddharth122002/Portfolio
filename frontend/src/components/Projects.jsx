import React, { useContext } from "react";
import sci from "../assets/scispot.png";
import book from "../assets/bookstore.png";
import crypto from "../assets/crypto.png";
import { UserContext } from "../context/UserContext";

function Projects() {
  const {dark} = useContext(UserContext);
  return (
    <div className={dark?"dark":"light"}>
      <section id="/projects" className="py-20 border-b-2 border-purple-700 dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-12 dark:text-white">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
              
              <ProjectCard
                title="SciSpot"
                image={sci}
                description="SciSpot shows summarized science articles.It shows CRUD,authentication,authorization(only the owner of a post can change it.)"
                link="https://science-spot-frontend.vercel.app/"
              />
              <ProjectCard
                title="Bookstore"
                image={book}
                description="Demonstrates CRUD functionality."
                link="https://books-frontend-fawn.vercel.app/"
              />
              <ProjectCard
                title="Crypto"
                image={crypto}
                description="Uses coinGeckoAPI to fetch data and based on that gives latest Coin, Exchanges."
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
