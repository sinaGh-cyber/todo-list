import Classes from './Alert.module.css';
import { useAlert } from '../../provider/alertProvider';

const Alert = () => {
  const { isAlert, setIsAlert } = useAlert();

  const onCancelBtnClickHandler = () => {
    isAlert.showAlert = false;
    setIsAlert({ ...isAlert });
  };

  const onDeleteBtnClickHandler = () => {
    isAlert.method(isAlert.Id);
    isAlert.showAlert = false;
    setIsAlert({ ...isAlert });
  };
  return (
    <>
      <section className={Classes.background}>
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
              onClick={onDeleteBtnClickHandler}
              className={Classes.danger}
            >
              DELETE
            </button>
          </div>
        </section>
      </section>
    </>
  );
};

export default Alert;
