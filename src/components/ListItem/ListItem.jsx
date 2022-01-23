import { useState } from 'react/cjs/react.development';
import Classes from './ListItem.module.css';
import { usePriorityQueue } from '../../provider/priorityQueueProvider';

const ListItem = ({ priority, description, title }) => {
  const [descriptionIsShowed, setDescriptionIsShowed] = useState(false);
  const [descriptionText, setDescriptionText] = useState(false);
  const { priorityQueue, updatePriorityQueue } = usePriorityQueue();

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
            <button className={Classes.done}>
              <i className={Classes.icon}></i>
            </button>
            <button className={Classes.delete}>
              <i className={Classes.icon}></i>
            </button>
          </div>
          <button
            className={Classes.expend}
            onClick={(e) => {
              if (!descriptionIsShowed) setDescriptionIsShowed(true);

              const ButtonClass =
                e.target.parentElement.className === Classes.expend
                  ? Classes.shrink
                  : Classes.expend;

              if (e.target.parentElement.classList.contains(Classes.expend)) {
                console.log('here');
                setTimeout(() => {
                  console.log(
                    e.target.parentElement.parentElement.parentElement
                  );
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
                }, 150);
              }
              e.target.parentElement.className = ButtonClass;
            }}
          >
            <i className={Classes.icon}></i>
          </button>
        </div>
      </li>
      {descriptionIsShowed && (
        <form onSubmit={SaveDescriptionChange}>
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
