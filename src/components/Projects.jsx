import React, { useState } from "react";

export default function Projects() {
  const [openImage, setOpenImage] = useState(null);
  const handleOpen = (src) => setOpenImage(src);
  const handleClose = () => setOpenImage(null);

  return (
    <section className="projects" id="projects">
      <div className="project-img">
        <img src="/project1.jpg" alt="Project sample" onClick={() => handleOpen("/project1.jpg")} />
      </div>
      <div className="project-text">
        <h3>Desain Infografis Shinkansen – Kereta Cepat Jepang</h3>
        <p>
          Desain ini merupakan infografis edukatif yang menjelaskan tentang infrastruktur transportasi canggih di Jepang, yaitu kereta cepat Shinkansen. Desain mencakup sejarah, kecepatan, rute utama, dan teknologi keamanan Shinkansen.
        </p>
      </div>

      {openImage && (
        <div className="modal" onClick={handleClose}>
          <span className="modal-close">&times;</span>
          <img src={openImage} alt="Preview" className="modal-content" />
        </div>
      )}
    </section>
  );
}
