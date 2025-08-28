import React, { useState } from "react";

export default function Gallery() {
  const [openImage, setOpenImage] = useState(null);
  const handleOpen = (src) => setOpenImage(src);
  const handleClose = () => setOpenImage(null);

  return (
    <section className="gallery" id="gallery">
      <h2>mY ISTERI</h2>
      <div className="gallery-grid">
        <div onClick={() => handleOpen("/gallery1.jpg")}>
          <img src="/gallery1.jpg" alt="Gallery 1" />
          <p>kauruko</p>
        </div>
        <div onClick={() => handleOpen("/gallery2.jpg")}>
          <img src="/gallery2.jpg" alt="Gallery 2" />
          <p></p>
        </div>
        <div onClick={() => handleOpen("/gallery3.jpg")}>
          <img src="/gallery3.jpg" alt="Gallery 3" />
          <p>Furina</p>
        </div>
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
