import React, { useState } from 'react';
import styles from './BookingForm.module.css';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '19:00',
    guests: 2,
    occasion: 'Anniversary'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className={styles.container}>
      <div className={styles.visualHeader}>
        <h1 className={styles.title}>Little Lemon</h1>
        <p className={styles.subtitle}>The aesthetics of a Mediterranean dinner</p>
      </div>

      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <div className={styles.inputGroup}>
          <label htmlFor="date">Pick date</label>
          <input 
            type="date" 
            id="date" 
            name="date" 
            className={styles.input} 
            onChange={handleChange}
          />
        </div>

        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <label htmlFor="time">Time</label>
            <select id="time" name="time" className={styles.select} onChange={handleChange}>
              <option>18:00</option>
              <option>19:00</option>
              <option>20:00</option>
            </select>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="guests">Number of guests</label>
            <input 
              type="number" 
              id="guests" 
              name="guests" 
              min="1" max="10" 
              className={styles.input}
              onChange={handleChange}
            />
          </div>
        </div>

        <button type="submit" className={styles.mainButton}>
          Book a table
          <span className={styles.buttonLine}></span>
        </button>
      </form>
    </section>
  );
};

export default BookingForm;
