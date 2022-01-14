import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import Classes from './addProduct.module.css';

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const errorEl = useRef(undefined);
  useEffect(() => {
    setValue('priority', '1');
    console.dir(errorEl.current);

    errorEl.current &&
      errors.title &&
      (errorEl.current.style = 'background-color: rgba(247, 36, 36, 0.815);');
    setTimeout(() => {
      errorEl.current.style =
        'background-color: transparent; color: transparent;transition: all 2s linear;';
    }, 7000);
  });

  const submitter = (data) => {
    console.log(data);
  };
  console.log(errors);
  return (
    <>
      <p ref={errorEl} className={Classes.error}>
        {errors.title?.message}
      </p>

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
              value="1"
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
              value="3"
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
