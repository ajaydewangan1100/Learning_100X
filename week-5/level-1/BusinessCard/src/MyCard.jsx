import React from "react";

export default function MyCard(props) {
  return (
    <div className="main_container">
      <div className="container">
        <h2>{props.name || "Ajay Dewangan"}</h2>
        <p>{props.work || "A MERN Stack Developer."}</p>

        <h4>Interests</h4>
        <span>{props.interest1 || "Data science and algorithm"}</span>
        <br />
        <span>{props.interest2 || "Backend Development"}</span>
        <br />
        <span>{props.interest3 || "Front End Development"}</span>
        <br />
        <br />
        <div>
          <button>
            <a
              href={
                props.linkedInLink
                  ? props.linkedInLink
                  : "https://github.com/ajaydewangan1100"
              }
            >
              Linkedin
            </a>
          </button>
          &nbsp;&nbsp;
          <button>
            <a
              href={props.twitterLink || "https://github.com/ajaydewangan1100"}
            >
              Twitter
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
