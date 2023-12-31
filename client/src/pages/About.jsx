import { Box, Typography, IconButton, Popover } from "@mui/material";
import TypewriterComponent from "typewriter-effect";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import React, { useState, useEffect } from "react";
import Wave from "./Wave";

export default function About() {
  const [loaded, setLoaded] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const copyEmailToClipboard = (event) => {
    const el = document.createElement("textarea");
    el.value = "davissong01@gmail.com";
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);

    setAnchorEl(event.currentTarget);
    setPopoverOpen(true);

    setTimeout(() => {
      setPopoverOpen(false);
    }, 1500);
  };

  return (
    <Box
      sx={{
        position: "relative",
        opacity: loaded ? 1 : 0,
        transition: "opacity 0.5s ease-in-out",
        height: "100%",
      }}
    >
      <Box>
        {/* Hero Section */}
        <Box
          sx={{
            position: "relative",
            zIndex: 2,

            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            paddingX: "5vw",
            paddingY: "8vh",
            color: "white",

            fontSize: "5rem",
            fontWeight: "300",
            fontFamily: "Montserrat",

            "@media (max-width: 600px)": {
              fontSize: "2rem",
              padding: "50px",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: "inherit",
              fontWeight: "inherit",
              fontFamily: "inherit",
            }}
          >
            Hi, I&apos;m Davis.
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: "inherit",
            }}
          >
            <Typography
              style={{
                fontSize: "inherit",
                fontWeight: "inherit",
                fontFamily: "inherit",
                overflow: "hidden",
              }}
            >
              <TypewriterComponent
                options={{
                  strings: [
                    `I'm a developer.`,
                    `I'm a designer.`,
                    `I'm a programmer.`,
                    `Enjoy the waves?`,
                    `Get in touch!`,
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                }}
              />
            </Typography>
          </Box>

          {/* Description Section */}
          <Box
            sx={{
              fontSize: "1rem",
              fontWeight: "inherit",
              fontFamily: "inherit",
              width: "80vw",
              paddingTop: "20px",
              "@media (max-width: 600px)": {
                paddingTop: "20px",
                width: "70vw",
                fontSize: "0.75rem",
              },
            }}
          >
            <Typography
              sx={{
                fontSize: "inherit",
                fontWeight: "inherit",
                fontFamily: "inherit",
              }}
            >
              Currently, I work at Tegus developing software used by equity
              research analysts to build bespoke financial models.
            </Typography>
            <br />
            <Typography
              sx={{
                fontSize: "inherit",
                fontWeight: "inherit",
                fontFamily: "inherit",
              }}
            >
              I&apos;m also a 4th year Computer Science Student at The
              University of British Columbia.
            </Typography>
          </Box>

          {/* {Links Selection} */}
          <Box
            sx={{
              display: "flex",
              paddingTop: "20px",
              "@media (max-width: 600px)": {
                paddingTop: "20px",
              },
            }}
          >
            <IconButton
              sx={{ paddingLeft: 0 }}
              href="https://github.com/d-x-s"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon
                sx={{
                  fontSize: "50px",
                  color: "white",
                  transition: "color 0.25s ease-in-out",
                  "&:hover": {
                    color: "#C3B1E1",
                  },
                  "@media (max-width: 600px)": {
                    fontSize: "25px",
                  },
                }}
              />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/davissong/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon
                sx={{
                  fontSize: "50px",
                  color: "white",
                  transition: "color 0.25s ease-in-out",
                  "&:hover": {
                    color: "#A7C7E7",
                  },
                  "@media (max-width: 600px)": {
                    fontSize: "25px",
                  },
                }}
              />
            </IconButton>
            <IconButton onClick={(event) => copyEmailToClipboard(event)}>
              <EmailIcon
                sx={{
                  fontSize: "50px",
                  color: "white",
                  transition: "color 0.25s ease-in-out",
                  "&:hover": {
                    color: "#FF6961",
                  },
                  "@media (max-width: 600px)": {
                    fontSize: "25px",
                  },
                }}
              />
            </IconButton>
          </Box>
        </Box>
        <Popover
          open={popoverOpen}
          anchorEl={anchorEl}
          onClose={() => setPopoverOpen(false)}
          anchorOrigin={{
            vertical: "right",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          sx={{
            ".MuiPaper-root": {
              fontSize: "1rem",
              fontWeight: "inherit",
              fontFamily: "Montserrat",
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.8)",
            },
          }}
        >
          <Typography
            sx={{
              p: 2,
              fontFamily: "inherit",
              fontSize: "inherit",
              fontWeight: "inherit",
            }}
          >
            Email copied to clipboard.
          </Typography>
        </Popover>
      </Box>
      <Wave />
    </Box>
  );
}
