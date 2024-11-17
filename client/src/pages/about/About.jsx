import React, { useEffect, useState } from "react";
import axios from "axios";

const About = () => {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/about-page`
        );
        console.log(res.data);
        setAboutData(res.data);
      } catch (err) {
        console.error("Error fetching About Page data:", err);
      }
    };

    fetchAboutData();
  }, []);

  if (!aboutData) return <p>Loading...</p>;

  return (
    <div>
      <h1>{aboutData.title}</h1>
      <p>{aboutData.description}</p>
      <img src={aboutData.image?.url} alt="About" />
    </div>
  );
};

export default About;
