import PriorityQueue from '../components/priorityQueue/priorityQueue';
import React, { useContext, useState } from 'react';
import { createContext } from 'react/cjs/react.development';
import { cloneDeep } from 'lodash';

const PriorityQueueContext = createContext(undefined);

const PriorityQueueProvider = ({ children }) => {
  const [priorityQueue, setPriorityQueue] = useState(new PriorityQueue());

  if (localStorage.getItem('myPriorityQueue')) {
    priorityQueue.values = JSON.parse(localStorage.getItem('myPriorityQueue'));
  }

  const updatePriorityQueue = () => {
    const stringifyPriorityQueue = JSON.stringify(priorityQueue.values);
    localStorage.setItem('myPriorityQueue', stringifyPriorityQueue);
    setPriorityQueue(cloneDeep(priorityQueue));
  };
  return (
    <PriorityQueueContext.Provider
      value={{ priorityQueue, updatePriorityQueue }}
    >
      {children}
    </PriorityQueueContext.Provider>
  );
};

const usePriorityQueue = () => {
  const myContext = useContext(PriorityQueueContext);
  if (myContext) return myContext;
  throw new Error('provider issue');
};

export default PriorityQueueProvider;
export { usePriorityQueue };
