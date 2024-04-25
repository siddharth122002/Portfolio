import { useState } from "react";
import axios from "axios"
function Contact() {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [message,setMessage] = useState("");
  const handler=(e)=>{
    e.preventDefault();
    const res =  axios.post('http://localhost:3000/',{
      name,
      email,
      message,
    })

    .catch((e)=>{
      console.log(e);
    })
    setName('');
    setEmail('');
    setMessage('');
  }
  return (
    <section id="/contact" className="py-20 bg-gradient-to-r from-purple-500 to-blue-500">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-12">Get in Touch</h2>
          <div className="mt-8">
            <form onSubmit={(e)=>(handler(e))}>
            <input

              onChange={(e)=>(setName(e.target.value))}
              value={name}
              type="text"
              placeholder="Your Name"
              className="block w-full p-4 border border-transparent rounded-lg mb-4 focus:outline-none focus:border-white bg-white bg-opacity-25 text-white placeholder-white"
            />
            <input
              onChange={(e)=>(setEmail(e.target.value))}
              value={email}
              type="email"
              placeholder="Your Email"
              className="block w-full p-4 border border-transparent rounded-lg mb-4 focus:outline-none focus:border-white bg-white bg-opacity-25 text-white placeholder-white"
            />
            <textarea
              onChange={(e)=>(setMessage(e.target.value))}
              value={message}
              placeholder="Your Message"
              rows="5"
              className="block w-full p-4 border border-transparent rounded-lg mb-4 focus:outline-none focus:border-white bg-white bg-opacity-25 text-white placeholder-white"
            ></textarea>
            <button
             
             type="submit"
             className="bg-white text-purple-700 py-3 px-8 rounded-lg transition duration-300 hover:bg-purple-100 hover:text-purple-800 hover:translate-y-[-3px]">Send Message</button>
             </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
