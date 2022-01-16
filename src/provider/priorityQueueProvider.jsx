import PriorityQueue from '../components/priorityQueue/priorityQueue';
import React, { useContext, useState } from 'react';
import { createContext } from 'react/cjs/react.development';

const PriorityQueueContext = createContext(undefined);

const PriorityQueueProvider = ({ children }) => {
  const [priorityQueue, setPriorityQueue] = useState(new PriorityQueue());

  if (localStorage.getItem('myPriorityQueue')) {
    priorityQueue.values = localStorage.getItem('myPriorityQueue').json.parse();
  }

  const updatePriorityQueue = () => {
    const stringifyPriorityQueue = priorityQueue.values.json.stringify();
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
