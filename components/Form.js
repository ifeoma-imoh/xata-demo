import React from "react";
import styles from "../styles/Home.module.css";
import handleRequest from "../helpers/helpers";

// Add update as a prop
export default function Form({ formValues, setFormValues, update }) {
  const handleChange = (e) => {
    setFormValues((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRequest("create", formValues);
  };

  //Add this
  const handleUpdate = (e) => {
    e.preventDefault();
    handleRequest("update", { ...formValues, update });
  };

  return (
    <form
      className={styles.form}
      //Update this
      onSubmit={!update ? handleSubmit : handleUpdate}
    >
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          onChange={handleChange}
          value={formValues.name}
        />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          onChange={handleChange}
          value={formValues.message}
        />
      </div>
      {/* Update this */}
      <button type="submit">{!update ? "Submit" : "Update"}</button>
    </form>
  );
}
