import "./nav.css";
import { useState } from "react";

export default function Nav() {
  const [image_url, setImage_url] = useState(
    localStorage.getItem("image_url") || ""
  );
  return (
    <div className="nav-container">
      <button
        className="open-nav"
        onClick={() => {
          document.querySelector(".nav").classList.remove("close-nav");
        }}
      >
        &#9776;
      </button>
      <div className="nav close-nav">
        <h1>Config</h1>
        <form action="">
          <button
            onClick={(e) => {
              e.preventDefault();
              document.querySelector(".nav").classList.add("close-nav");
            }}
          >
            X
          </button>
          <label htmlFor="">Image Url</label>
          <input
            type="text"
            name="image_url"
            id=""
            value={image_url}
            placeholder="jetblue_masamo/common/imagenes/"
            onChange={(e) => {
              setImage_url(e.target.value);
              localStorage.setItem("image_url", e.target.value);
            }}
          />
        </form>
      </div>
    </div>
  );
}
