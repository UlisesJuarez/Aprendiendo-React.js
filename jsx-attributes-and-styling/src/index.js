import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <div>
      <img
        alt="dua"
        src="https://media.glamour.mx/photos/619057902d97bd4c522a3477/master/w_1600,c_limit/253193.jpg"
      />
      <img
        alt="gal"
        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gal-gadot-is-seen-at-jimmy-kimmel-live-on-november-03-2021-news-photo-1643885697.jpg"
      />
      <img
        alt="katy"
        src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2018/01/18/15162899711993.jpg"
      />
    </div>
    <div>
      <img alt="random" src={img + "?grayscale"} />
    </div>
  </div>,
  document.getElementById("root")
);
