import { useState } from 'react';
import Classes from './ListItem.module.css';
import { usePriorityQueue } from '../../provider/priorityQueueProvider';
import { useAlert } from '../../provider/alertProvider';
import { useEffect } from 'react';

const ListItem = ({ priority, description, title }) => {
  const [descriptionIsShowed, setDescriptionIsShowed] = useState(false);
  const [descriptionText, setDescriptionText] = useState(false);
  const { priorityQueue, updatePriorityQueue } = usePriorityQueue();
  const { isAlert, setIsAlert } = useAlert();

  useEffect(() => {
    return () => {
      isAlert.showAlert = false;
      setIsAlert({ ...isAlert });
    };
  }, []);

  const SaveDescriptionChange = (e) => {
    e.preventDefault();
    if (descriptionText !== false) {
      priorityQueue.values.forEach((item) => {
        if (item.priority === priority) {
          item.val.description = descriptionText;
          updatePriorityQueue();
        }
      });
    }
  };

  const expendShrinkBtnHandler = (e) => {
    if (!descriptionIsShowed) setDescriptionIsShowed(true);

    const ButtonClass =
      e.target.parentElement.className === Classes.expend
        ? Classes.shrink
        : Classes.expend;

    if (e.target.parentElement.classList.contains(Classes.expend)) {
      setTimeout(() => {
        e.target.parentElement.parentElement.parentElement.classList.add(
          Classes.show
        );
      }, 20);
    } else {
      e.target.parentElement.parentElement.parentElement.classList.remove(
        Classes.show
      );
      setTimeout(() => {
        if (descriptionIsShowed) {
          setDescriptionIsShowed(false);
        }
      }, 100);
    }
    e.target.parentElement.className = ButtonClass;
  };

  const onDoneBtnClickHandler = () => {
    isAlert.showAlert = true;
    isAlert.message = 'you are marking this task as done.';
    isAlert.Id = priority;
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

  const onUndoBtnClickHandler = () => {
    isAlert.showAlert = true;
    isAlert.message = 'you are Undoing  this finished task.';
    isAlert.Id = priority;
    isAlert.action = 'UNDO';
    isAlert.method = function deleteItemFromQueue(Id) {
      let tempArray = [];
      let lastDequeuedNode;
      while (priorityQueue.values.length) {
        lastDequeuedNode = priorityQueue.dequeue();
        if (lastDequeuedNode.priority !== Id) {
          tempArray.push(lastDequeuedNode);
        } else {
          lastDequeuedNode.priority -= 30000000000000;
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
    isAlert.Id = priority;
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
  const priorityCode = Number((priority + '')[0]);

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
      <li className={`${Classes.listItem} ${priorityClass}`}>
        <div className={Classes.title}>{title}</div>
        <div className={Classes.manageItem}>
          <div className={Classes.buttonGroup}>
            {priorityClass === Classes.gray && (
              <button onClick={onUndoBtnClickHandler} className={Classes.undo}>
                <i className={Classes.icon}></i>
              </button>
            )}

            {priorityClass !== Classes.gray && (
              <button onClick={onDoneBtnClickHandler} className={Classes.done}>
                <i className={Classes.icon}></i>
              </button>
            )}

            <button
              onClick={onDeleteBtnClickHandler}
              className={Classes.delete}
            >
              <i className={Classes.icon}></i>
            </button>
          </div>
          <button className={Classes.expend} onClick={expendShrinkBtnHandler}>
            <i className={Classes.icon}></i>
          </button>
        </div>
      </li>
      {descriptionIsShowed && (
        <form
          className={Classes.expendedTextarea}
          onSubmit={SaveDescriptionChange}
        >
          <textarea
            onChange={(e) => {
              setDescriptionText(e.target.value);
            }}
            defaultValue={description}
          ></textarea>
          <input type="submit" value="save" />
        </form>
      )}
    </>
  );
};

export default ListItem;
