import React, { useEffect, useState } from "react";
import { AcademicCapIcon } from "@heroicons/react/outline";
import styles from './Qualification.module.css';

export default function Qualification() {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
      setModalOpen(true);
    };

    const closeModal = () => {
      setModalOpen(false);
    };
    // useEffect(() => {
    //     const image = document.getElementById('certificate');
    //     if (image) {
    //       image.style.display = 'inline'; // Or any other display style you want
    //       image.style.userSelect = 'auto'; // Or any other user-select style you want
    //     }
    //   }, []);

    return (
        <section id={styles.qual_section}>
            <div className={styles.qual_container}>
                <div className={styles.qual_iconContainer}>
                    <AcademicCapIcon className={styles.qual_icon} />
                    <h1>
                        Qualification
                    </h1>
                    <p>
                        I am proud to hold a Fullstack Developer Professional Certificate from Massachusetts Institute of Technology, one of the world's most prestigious universities. This rigorous program equipped me with the skills and knowledge needed to develop fullstack web applications using modern technologies and best practices. I am excited to apply these skills to create innovative and impactful solutions for clients and users
                    </p>
                </div>

                <button onClick={openModal} className={styles.qual_modal}>View Certificate</button>

                {isModalOpen && (
                  <div className={styles.modal}>
                    <div className={styles.modal_content}>
                      <span className={styles.close} onClick={closeModal}>&times;</span>
                      <img src="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/71287060" alt="Certificate" className={styles.modal_img} />
                    </div>
                  </div>
                )}


                  <div className={styles.qual_certContainer}> 
                    <div className={styles.qual_certInner}> 
                        <div className={styles.qual_iframeContainer}> 
                            <iframe
                                title="Fullstack Certificate"
                                src="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/71287060"
                                className={styles.qual_certificate}
                                allowFullScreen
                                style={{width: '100% !important'}}
                                id="certificate"
                            />
                            
                        </div>
                    </div>
                 </div>
             </div>  
        </section>
    );
}


