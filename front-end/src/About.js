import React from 'react'
import placeHolder from "./placeholder.png";

const About = () => {
    return (
        <div>
            <h1>Manny Soto Ruiz</h1>
    
            <div 
            style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "30px", flexDirection: "column", gap: "3rem"}}
            >   
                {/* paragraphs */}
                <p style={{ paddingRight: "100px", paddingLeft: "100px" }}>I am a senior studying Computer Science. I was originally a biology major and on the pre-med
                    track but I decided to change my studies since I wasn't enjoying it anymore. I am glad that I made the switch since I have been enjoying CS since my first day of coding.
                </p>
                <p style={{ paddingRight: "100px", paddingLeft: "100px" }}>
                    In my free time, I like to stay active. Soccer and boxing are two of my favorite sports. Also, I like to spend my time listening to music. I was originally born in Mexico City 
                    but moved to New York when I was 2 years old. Just last year, I was able to travel back to Mexico for the first time since I moved to the United States.
                </p>
                <p style={{ paddingRight: "100px", paddingLeft: "100px" }}>
                    After graduation, my goal is to work as a software engineer and continue to develop my skills and knowledge in the tech field.
                    I am excited for what the future holds and I can't wait to see what opportunities come my way.
                </p>
    
                {/* image */}
                <div style={{ width: "200px", height: "200px" }}>
                    <img style={{ objectFit: "cover", height: "100%", width: "100%", borderRadius: "20px" }} src={placeHolder} alt=""/>
                </div>
            </div>
        </div>
      )
}

export default About