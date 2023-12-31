import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import softwareProjects from "../data/projects/projects";
import ProjectCard from "../components/projects/ProjectCard";

export default function Projects() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <Box
      sx={{
        height: "100%",
        opacity: loaded ? 1 : 0,
        transition: "opacity 0.5s ease-in-out",
      }}
    >
      <Box
        sx={{
          // backgroundColor: "#000000",
          // height: "100%",
          // overflowY: "hidden",
          overflowX: "hidden",
          // marginBottom: "500px",
          display: "flex",
        }}
      >
        <Box
          sx={{
            width: "90vw",
            flexWrap: "wrap",
            paddingTop: "45px",
            paddingRight: "5%",
            paddingLeft: "5%",
            paddingBottom: "5%",
            display: "flex",
            gap: "2vw",
            justifyContent: "center",
            backgroundColor: "black",
          }}
        >
          {softwareProjects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              link={project.link}
              liveDemo={project.liveDemo}
              projectImage={project.projectImage}
              techStack={project.techStack}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
