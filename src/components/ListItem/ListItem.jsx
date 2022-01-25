import { useState } from 'react/cjs/react.development';
import Classes from './ListItem.module.css';
import { usePriorityQueue } from '../../provider/priorityQueueProvider';
import { useAlert } from '../../provider/alertProvider';

const ListItem = ({ priority, description, title }) => {
  const [descriptionIsShowed, setDescriptionIsShowed] = useState(false);
  const [descriptionText, setDescriptionText] = useState(false);
  const { priorityQueue, updatePriorityQueue } = usePriorityQueue();
  const { isAlert, setIsAlert } = useAlert();

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
            <button
              onClick={() => {
                console.log('1');
                isAlert.showAlert = true;
                isAlert.message = 'you are deleting this task.';
                setIsAlert({ ...isAlert });
              }}
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
