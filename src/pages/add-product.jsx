import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useRef, useState } from 'react/cjs/react.development';
import { usePriorityQueue } from '../provider/priorityQueueProvider';
import Classes from './addProduct.module.css';
const UnSubmittableTime = 3000;

const AddProduct = () => {
  const [prevTime, setPrevTime] = useState(undefined);

  const { priorityQueue, updatePriorityQueue } = usePriorityQueue();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    setValue('priority', '3');
  }, [setValue]);

  const [isSuccess, setIsSuccess] = useState(false);

  const showSuccessAlert = () => {
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), UnSubmittableTime);
  };

  const submitter = (data) => {
    const currentTime = new Date().getTime();

    if (!prevTime || prevTime + UnSubmittableTime < currentTime) {
      priorityQueue.enqueue(data, Number(data.priority + currentTime));
      setPrevTime(currentTime);
      showSuccessAlert();
      updatePriorityQueue();
    }
    if (!prevTime) setPrevTime(currentTime);
  };

  return (
    <>
      {isSuccess && (
        <p
          onClick={() => {
            setIsSuccess(false);
          }}
          className={`${Classes.success} ${Classes.alert}`}
        >
          Task added successfully.
        </p>
      )}

      {
        <p
          style={
            errors.title
              ? {
                  backgroundColor: 'red',
                  color: '#fff',
                  transition: 'all 0.2s linear',
                }
              : { backgroundColor: 'transparent', color: 'transparent' }
          }
          onClick={(e) => {
            e.target.style =
              ' backgroundColor: transparent ; color: transparent ';
          }}
          className={`${Classes.error} ${Classes.alert}`}
        >
          {errors.title?.message}
        </p>
      }
      <form onSubmit={handleSubmit(submitter)}>
        <div id={Classes.title}>
          <label htmlFor="title">Title:</label>
          <input
            {...register('title', {
              required: "you haven't entered title",
            })}
            id="title"
            type="text"
          />
        </div>

        <div id={Classes.priority}>
          <label className="priority">priority:</label>
          <div>
            <input
              name="priority"
              {...register('priority', {
                required: "you haven't select a priority",
              })}
              type="radio"
              value="3"
            />
            <input
              name="priority"
              {...register('priority', {
                required: "you haven't select a priority",
              })}
              type="radio"
              value="2"
            />
            <input
              name="priority"
              {...register('priority', {
                required: "you haven't select a priority",
              })}
              type="radio"
              value="1"
            />
          </div>
        </div>

        <div id={Classes.description}>
          <label htmlFor="description">description:</label>
          <textarea
            rows="10"
            id="description"
            {...register('description', {
              max: { value: 'max carechter 1200' },
            })}
          />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </>
  );
};

export default AddProduct;
