import Classes from './ListItem.module.css';

const ListItem = ({ priority, description, children }) => {
  let priorityClass;

  console.log(priority);

  if (priority === 3) {
    priorityClass = Classes.green;
  } else if (priority === 2) {
    priorityClass = Classes.yellow;
  } else {
    priorityClass = Classes.red;
  }

  return (
    <>
      <li className={`${Classes.listItem} ${priorityClass}`}>{children}</li>
    </>
  );
};

export default ListItem;
