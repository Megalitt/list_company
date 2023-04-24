import React from 'react';
import './App.css';
import '../src/data'
import styles from './style/App.module.css';
import Card from './component/Card';

function App() {
  return (
    <div className={styles.app}>
      <Card/>
    </div>
  );
}

export default App;
