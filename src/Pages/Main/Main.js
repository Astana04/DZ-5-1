import React from "react";
import "./ImageGallery.css";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="image-gallery">
      <div className="image-container">
        <Link to="/Page">
          <img src="https://upload.wikimedia.org/wikipedia/ru/6/69/Thor_Marvel.png" alt="Image 1" className="image" />
          <div className="text">
          Привет, я Тор персонаж Мстители.
          </div>{" "}
        </Link>
      </div>

      <div className="image-container">
        <Link to="/Page">
          <img src="https://upload.wikimedia.org/wikipedia/ru/6/69/Thor_Marvel.png" alt="Image 2" className="image" />
          <div className="text">
          Привет, я Тор персонаж Мстители.
          </div>{" "}
        </Link>
      </div>

      <div className="image-container">
        <Link to="/Page">
          <img src="https://upload.wikimedia.org/wikipedia/ru/6/69/Thor_Marvel.png" alt="Image 3" className="image" />
          <div className="text">
            Привет, я Тор персонаж Мстители.
          </div>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Main;