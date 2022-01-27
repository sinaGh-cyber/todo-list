import React, { useEffect } from 'react';
import Classes from './Home.module.css';
import { usePriorityQueue } from '../provider/priorityQueueProvider';
import { useAlert } from '../provider/alertProvider';

const Home = () => {
  const { priorityQueue, updatePriorityQueue } = usePriorityQueue();
  const { isAlert, setIsAlert } = useAlert();
  useEffect(() => {
    return () => {
      isAlert.showAlert = false;
      setIsAlert({ ...isAlert });
    };
  }, []);

  const onDoneBtnClickHandler = () => {
    isAlert.showAlert = true;
    isAlert.message = 'you are marking this task as done.';
    isAlert.Id = priorityQueue.values[0].priority;
    isAlert.action = 'Done';
    isAlert.method = function deleteItemFromQueue(Id) {
      let tempArray = [];
      let lastDequeuedNode;
      while (priorityQueue.values.length) {
        lastDequeuedNode = priorityQueue.dequeue();
        if (lastDequeuedNode.priority !== Id) {
          tempArray.push(lastDequeuedNode);
        } else {
          lastDequeuedNode.priority += 30000000000000;
          tempArray.push(lastDequeuedNode);
          break;
        }
      }
      for (let node of tempArray) {
        priorityQueue.enqueue(node.val, node.priority);
      }
      tempArray = null;
      updatePriorityQueue();
    };
    setIsAlert({ ...isAlert });
  };

  const onDeleteBtnClickHandler = () => {
    isAlert.showAlert = true;
    isAlert.message = 'you are deleting this task.';
    isAlert.Id = priorityQueue.values[0].priority;
    isAlert.action = 'DELETE';
    isAlert.method = function deleteItemFromQueue(Id) {
      let tempArray = [];
      let lastDequeuedNode;
      while (priorityQueue.values.length) {
        lastDequeuedNode = priorityQueue.dequeue();
        if (lastDequeuedNode.priority !== Id) {
          tempArray.push(lastDequeuedNode);
        } else {
          break;
        }
      }
      for (let node of tempArray) {
        priorityQueue.enqueue(node.val, node.priority);
      }
      tempArray = null;
      updatePriorityQueue();
    };
    setIsAlert({ ...isAlert });
  };

  let priorityClass;
  const priorityCode = Number((priorityQueue?.values[0]?.priority + '')[0]);

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
    <>
      {priorityCode <= 3 && (
        <section className={`${Classes.card} ${priorityClass}`}>
          <button onClick={onDeleteBtnClickHandler} className={Classes.delete}>
            <i className={Classes.icon}></i>
          </button>

          <article className={Classes.content}>
            <h1 className={Classes.title}>
              {' '}
              {priorityQueue.values[0].val.title}{' '}
            </h1>
            <div className={Classes.description}>
              
              <p>{priorityQueue.values[0].val?.description}</p>
            </div>
          </article>

          <button onClick={onDoneBtnClickHandler} className={Classes.do}>
            <i className={Classes.icon}></i>
          </button>
        </section>
      )}{' '}
      {(priorityCode > 3 || !priorityCode) && (
        <div className={Classes.noTask}>
          <h1 className={Classes.noTask}> there is no task... </h1>
        </div>
      )}
    </>
  );
};

export default Home;
