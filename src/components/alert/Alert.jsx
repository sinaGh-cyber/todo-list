import Classes from './Alert.module.css';
import { useAlert } from '../../provider/alertProvider';

const Alert = () => {
  const { isAlert, setIsAlert } = useAlert();
  console.log('alert');
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
              onClick={() => {
                isAlert.showAlert = false;
                setIsAlert({ ...isAlert });
              }}
              className={Classes.cancel}
            >
              CANCEL
            </button>
            <button
              onClick={() => {
                isAlert.method(isAlert.Id);
                isAlert.showAlert = false;
                setIsAlert({ ...isAlert });
              }}
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
