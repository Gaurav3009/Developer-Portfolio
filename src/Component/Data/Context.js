import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export function useDataContext() {
    return useContext(DataContext)
}

export function DataContextProvider({children}) {

    const experienceData = [
        {
            "company" : "Coginizant Technology Solutions",
            "post" : "GenC CSD Intern",
            "start" : "2023",
            "end" : "2024",
            "skills" : ["JAVA", "JavaScript", "SQL", "PL/SQL", "Informatica PowerCenter", "Informatica MDM"],
            "description" : "I worked with Java, SQL, PL/SQL, and JavaScript to develop and maintain applications. Using Informatica PowerCenter and Informatica MDM, I managed data integration and master data management processes. I gained knowledge of data warehousing concepts and built a master data system for a bank, ensuring data accuracy and consistency. This project enhanced my technical skills and understanding of data management."
        }
    ];

    const projectsData = [
        {
            "name" : "Share Stream",
            "description" : "ShareStream is a decentralized video-sharing platform utilizing Layer 1 Chain, Ethereum, and Layer 2 Chain, Polygon. It allows users to upload video content on the IPFS distributed file storage protocol. The UI is designed with ReactJS and SASS, while NodeJS is used to create a File-pinning API for log maintenance.",
            "url" : "https://github.com/Gaurav3009/Share-Stream",
            "image" : "/images/project2.jpeg"
        }, 
        {
            "name" : "Movie Recommender System",
            "description" : "MovieRecommender is a content-based recommender system utilizing the 'TMDB5000' dataset available on Kaggle. The application is deployed using Streamlit, with the code written in Python. It enhances user experience by suggesting relevant movie content based on user preferences.",
            "url" : "https://gaurav3009-movierecommendersystem-application-3g00tp.streamlit.app/",
            "image" : "/images/project1.jpeg"
        },
        {
            "name" : "Data Visualizer",
            "description" : "DataVisualizer is a web application designed for generating graphs from data in .csv files. The backend API is built using the Java Spring Boot framework, while the UI is created with ReactJS and SASS. Users can generate and download graphs easily, enhancing data analysis and visualization.",
            "url" : "https://github.com/Gaurav3009/Data-Visualization",
            "image" : "/images/project3.jpeg"
        }
    ];

    const writingsData = [
        {
            "name" : "JWT Authentication with Spring Boot",
            "year" : "2024",
            "link" : "https://medium.com/@Gauravblog/jwt-authentication-with-spring-boot-4d70cc7e2363",
            "image" : "/images/jwt.jpg"
        },
        {
            "name" : "Improving Data Integrity of IPFS On-Chain Proof",
            "year" : "2023",
            "link": "https://ieeexplore.ieee.org/document/10398081",
            "image" : "/images/research.jpg"
        },
        {
            "name" : "Data Visualization Web app using JAVA",
            "year" : "2023",
            "link" : "https://medium.com/@Gauravblog/data-visualization-web-app-using-java-d5bfb783c605",
            "image" : "/images/blog3.jpeg"
        },
        {
            "name" : "Artificial Neural Network",
            "year" : "2021",
            "link" : "https://medium.com/@Gauravblog/artificial-neural-network-bcc632a600c7",
            "image" : "/images/blog2.jpeg"
        },
    ];

    const [writings, setWritings] = useState(writingsData);

    const [experience, setExperience] =  useState(experienceData);
    const [project, setProject] = useState(projectsData);

    const value = {
        experience,
        setExperience,
        project,
        setProject,
        writings,
        setWritings
    };

    return <DataContext.Provider value={value}>
        {children}
    </DataContext.Provider>

}
