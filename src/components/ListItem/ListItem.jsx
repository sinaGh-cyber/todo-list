import { useState } from 'react/cjs/react.development';
import Classes from './ListItem.module.css';

const ListItem = ({ priority, description, title }) => {
  const [descriptionIsShowed, setDescriptionIsShowed] = useState(false);

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
              const ButtonClass = (e.target.parentElement.className === Classes.expend) ? Classes.shrink : Classes.expend; 
              e.target.parentElement.className= ButtonClass;
            }}
          >
            <i className={Classes.icon}></i>
          </button>
        </div>
      </li>
      {descriptionIsShowed && (
        <aside>
          <textarea name="" id="" cols="30" rows="10">
            {description}
          </textarea>
        </aside>
      )}
    </>
  );
};

export default ListItem;
