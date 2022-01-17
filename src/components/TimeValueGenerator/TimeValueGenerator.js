const timeValueGenerator = () => {
  const now = new Date();

  return (
    now.getFullYear() +
    '' +
    (now.getMonth() + 1) +
    '' +
    now.getDay() +
    '' +
    now.getHours() +
    now.getMinutes() +
    '' +
    now.getSeconds() +
    '' +
    now.getMilliseconds()
  );
};

export default timeValueGenerator;
