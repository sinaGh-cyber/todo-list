import React from 'react';
import { usePriorityQueue } from '../provider/priorityQueueProvider';
import { cloneDeep } from 'lodash';
import ListItem from '../components/ListItem/ListItem';
import Classes from './detailed-list.module.css';

const DetailedList = () => {
  const { priorityQueue, updatePriorityQueue } = usePriorityQueue();
  const tempPriorityQueue = cloneDeep(priorityQueue);

  const listItems = [];
  while (tempPriorityQueue.values.length) {
    let itemData = tempPriorityQueue.dequeue();
    console.log(itemData);

    let listItem = (
      <ListItem
        key={itemData.priority}
        priority={Number((itemData.priority + '')[0])}
        description={itemData.val?.description}
      >
        {' '}
        {itemData.val.title}
      </ListItem>
    );

    listItems.push(listItem);
  }

  return (
    <>
      <section className={Classes.container}>
        <ul className="detailedList">{listItems}</ul>
      </section>
    </>
  );
};

export default DetailedList;
