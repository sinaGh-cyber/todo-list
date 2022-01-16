import PriorityQueue from '../components/priorityQueue/priorityQueue';
import React, { useContext, useState } from 'react';
import { createContext } from 'react/cjs/react.development';

const PriorityQueueContext = createContext(undefined);

const PriorityQueueProvider = ({ children }) => {
  const [priorityQueue, setPriorityQueue] = useState(new PriorityQueue());

  if (localStorage.getItem('myPriorityQueue')) {
    priorityQueue.values = JSON.parse(localStorage.getItem('myPriorityQueue'));
  }

  const updatePriorityQueue = () => {
    const stringifyPriorityQueue = JSON.stringify(priorityQueue.values);
    localStorage.setItem('myPriorityQueue', stringifyPriorityQueue);
    setPriorityQueue({ ...priorityQueue });
  };
  return (
    <PriorityQueueContext.Provider
      value={{ priorityQueue, updatePriorityQueue }}
    >
      {children}
    </PriorityQueueContext.Provider>
  );
};

export default PriorityQueueProvider;
