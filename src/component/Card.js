import React from "react";
import { Link } from "react-router-dom";

const Card = ({ thumbnailUrl, title }) => {
  return (
    <div className="card w-80 bg-base-100 shadow-xl">
      <figure>
        <img src={thumbnailUrl} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions justify-end">
          <Link to={"/description"} className="btn btn-primary">
            Description
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
