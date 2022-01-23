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
          console.log('bingo');
          item.val.description = descriptionText;
          updatePriorityQueue();
        }
      });
    }
    console.log('here');
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
              setDescriptionIsShowed(!descriptionIsShowed);
              console.log(e.target.parentElement);
              const ButtonClass =
                e.target.parentElement.className === Classes.expend
                  ? Classes.shrink
                  : Classes.expend;
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
