import Classes from './Alert.module.css';

const Alert = ({ action, id }) => {
  console.log('alert');
  return (
    <>
      <section className={Classes.background}>
        <section className="alert">
          <div className="message"></div>
          <div className="buttons">
            <button className="yes">
              <i></i>
            </button>
            <button className="no">
              <i></i>
            </button>
          </div>
        </section>
      </section>
    </>
  );
};

export default Alert;
