import Classes from './ListItem.module.css';

const ListItem = ({ priority, description, title }) => {
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
          <button className={Classes.expend}>
            <i className={Classes.icon}></i>
          </button>
        </div>
      </li>
    </>
  );
};

export default ListItem;
