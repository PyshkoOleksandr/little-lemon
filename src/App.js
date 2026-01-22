import React, { useState } from 'react';
import Header from './layout/Header/Header';
import BookingForm from './components/BookingForm/BookingForm';
import styles from './App.module.css';

function App() {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleBooking = (data) => {
    console.log("Data received:", data);
    setIsConfirmed(true);
  };

  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        {!isConfirmed ? (
          <BookingForm onConfirm={handleBooking} />
        ) : (
          <div className={styles.successMessage}>
            <h2>Резерв підтверджено</h2>
            <p>Чекаємо на вас у Little Lemon. Лист із деталями вже на вашій пошті.</p>
            <button onClick={() => setIsConfirmed(false)} className={styles.backButton}>
              Повернутись
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
