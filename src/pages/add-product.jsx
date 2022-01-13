import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Classes from './addProduct.module.css';

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    setValue('priority', '1');
  });

  const submitter = (data) => {
    console.log(data);
  };

  return (
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
        <p className="error"></p>
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
  );
};

export default AddProduct;
