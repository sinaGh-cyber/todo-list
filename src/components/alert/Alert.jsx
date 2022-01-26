import Classes from './Alert.module.css';
import { useAlert } from '../../provider/alertProvider';

const Alert = () => {
  const { isAlert, setIsAlert } = useAlert();

  const onCancelBtnClickHandler = () => {
    isAlert.showAlert = false;
    setIsAlert({ ...isAlert });
  };

  const onTypedBtnClickHandler = () => {
    isAlert.method(isAlert.Id);
    isAlert.showAlert = false;
    setIsAlert({ ...isAlert });
  };

  const onBackgroundClickHandler = (e) => {
    if (e.target.classList.contains(Classes.background))
      onCancelBtnClickHandler();
  };

  let buttonType = isAlert.action === 'DELETE' ? Classes.delete : Classes.noneDelete;

  return (
    <>
      <section
        onClick={onBackgroundClickHandler}
        className={Classes.background}
      >
        <section className={Classes.alert}>
          <div className={Classes.message}>
            <p>{isAlert.message}</p>
            <p> Are you sure?</p>
          </div>
          <div className={Classes.buttons}>
            <button
              onClick={onCancelBtnClickHandler}
              className={Classes.cancel}
            >
              CANCEL
            </button>
            <button
              onClick={onTypedBtnClickHandler}
              className={`${Classes.danger} ${buttonType}`}
            >
              {isAlert.action}
            </button>
          </div>
        </section>
      </section>
    </>
  );
};

export default Alert;
