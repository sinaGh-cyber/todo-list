import React from 'react';
import Classes from './Home.module.css';
import { usePriorityQueue} from '../provider/priorityQueueProvider'
import { useAlert } from '../provider/alertProvider';

const Home = () => {

  const { priorityQueue, updatePriorityQueue } = usePriorityQueue();
  const { isAlert, setIsAlert } = useAlert();

  let priorityClass;
  const priorityCode = Number((priorityQueue.values[0].priority + '')[0]);

  if (priorityCode === 3) {
    priorityClass = Classes.green;
  } else if (priorityCode === 2) {
    priorityClass = Classes.yellow;
  } else if (priorityCode === 1) {
    priorityClass = Classes.red;
  } else {
    priorityClass = Classes.gray;
  }

  return (
    <section className={`${Classes.card} ${priorityClass}`}>
      <button className={Classes.delete}>
        <i className={Classes.icon}></i>
      </button>

      <article className={Classes.content}>
        <h1 className={Classes.title}></h1>
        <div className={Classes.description}></div>
      </article>

      <button className={Classes.do}>
        <i className={Classes.icon}></i>
      </button>
    </section>
  );
};

export default Home;
