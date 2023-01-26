import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import { XataClient } from "../src/xata";
import Card from "../components/Card";
import Form from "../components/Form";

export default function Home({ reviews }) {
  const [formValues, setFormValues] = useState({ name: "", message: "" });
  const [update, setUpdate] = useState("");

  const updateFormValue = (id) => {
    setUpdate(id);
    const updatedReview = reviews.find((review) => review.id === id);
    setFormValues({ name: updatedReview.name, message: updatedReview.message });
  };
  return (
    <div className={styles.container}>
      <h3>Review App</h3>

      <Form
        formValues={formValues}
        setFormValues={setFormValues}
        // Add this
        update={update}
      />
      <h4>Reviews:</h4>
      {reviews && reviews.length === 0 ? (
        <p className={styles.not_found}>No review yet</p>
      ) : (
        reviews.map((review, index) => (
          <Card
            key={index}
            review={review}
            // Add this
            handleUpdate={updateFormValue}
          />
        ))
      )}
    </div>
  );
}
export const getServerSideProps = async (req, res) => {
  const xata = new XataClient();
  const reviews = await xata.db.reviews.getMany();
  return { props: { reviews } };
};
