import PriorityQueue from '../components/priorityQueue/priorityQueue';
import React, { useContext, useState } from 'react';
import { createContext } from 'react/cjs/react.development';

const PriorityQueueContext = createContext(undefined);

const PriorityQueueProvider = ({ children }) => {


    const [priorityQueue, setPriorityQueue] = useState( new PriorityQueue() )


  return (
    <PriorityQueueContext.Provider value={{ }}>
      {children}
    </PriorityQueueContext.Provider>
  );
};

export default PriorityQueueProvider;
