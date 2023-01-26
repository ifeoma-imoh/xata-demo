import React from "react";
import styles from "../styles/Home.module.css";
import handleRequest from "../helpers/helpers";

export default function Card({ review, handleUpdate }) {
  const handleDelete = (id) => {
    handleRequest("delete", { id });
  };

  return (
    <div className={styles.card}>
      <div>
        <h5>{review.name}</h5>
        <p>{review.message}</p>
      </div>
      <div>
        <p onClick={() => handleDelete(review.id)}>Delete</p>
        <p onClick={() => handleUpdate(review.id)}>Edit</p>
      </div>
    </div>
  );
}
