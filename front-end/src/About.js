import React, { useEffect, useState } from 'react';

const About = () => {

    const [name, setName] = useState("");
    const [paragraphs, setParagraphs] = useState(null);
    const [image, setImage] = useState("");

    useEffect(() => {
        const fetchAboutData = async () => {
            const response = await fetch("http://localhost:5002/about");
            const json = await response.json();

            if (response.status === 200) {
                setName(json.name);
                setParagraphs(json.paragraphs);
                setImage(json.picture);
            }
        }

        fetchAboutData();
    }, [])


    return (
        <div>
            <h1>{name}</h1>
    
            <div 
            style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "30px", flexDirection: "column", gap: "3rem"}}
            >   
                {/* paragraphs */}
                {paragraphs?.map((p, idx) => {
                    return (
                        <p style={{ paddingRight: "100px", paddingLeft: "100px" }} key={idx}>{p}</p>
                    );
                })}
    
                {/* image */}
                <div style={{ width: "200px", height: "200px" }}>
                    <img style={{ objectFit: "cover", height: "100%", width: "100%", borderRadius: "20px" }} src={image} alt=""/>
                </div>
            </div>
        </div>
      )
}

export default About