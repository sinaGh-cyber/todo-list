import React from 'react';
import Classes from './Home.module.css'

const Home = () => {
  return (
    <section className={Classes.card}>
      <button className={Classes.do}></button>

      <article className={Classes.content}>
        <h1 className={Classes.title}></h1>
        <div className={Classes.description}></div>
      </article>

      <button className={Classes.delete}></button>
    </section>
  );
};

export default Home;
