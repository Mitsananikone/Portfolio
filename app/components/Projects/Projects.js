"use client";
import { CodeIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import { projects } from "../../data";
import styles from "./Projects.module.css";

export default function Projects() {
    const [screenWidth, setScreenWidth] = useState(0);

    useEffect(() => {
        // Update the screen width on component mount and window resize
        const updateScreenWidth = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener("resize", updateScreenWidth);
        updateScreenWidth();

        return () => {
            // Clean up the event listener on component unmount
            window.removeEventListener("resize", updateScreenWidth);
        };
    }, []);

    return (
        <section id="projects" className={styles.projects_section}>
            <div className={styles.projects_container}>
                <div className={styles.projects_iconContainer}>
                    <CodeIcon className={styles.projects_icon} />
                    <h1>
                        Projects
                    </h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
                        facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
                        fuga dolore.
                    </p>
                </div>
                <div className={styles.projects_gallery}>
                    {projects.map((project) => (
                        <a
                            href={project.link}
                            key={project.image}
                        >
                            <div className={styles.projects_projectbox}>



                                <img alt="gallery" src={project.image} className={styles.imgBox} />

                                <div className={styles.projects_projectBoxContainer}>
                                    <h2>{project.subtitle}</h2>
                                    <br className={styles.break} />
                                    <h1>{project.title}</h1>
                                    <br className={styles.break} />
                                    <p>{project.description}</p>
                                </div>
                            </div>

                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}