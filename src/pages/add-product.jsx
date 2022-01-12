import React from 'react';
import { useForm } from 'react-hook-form';
import  Classes  from './addProduct.module.css';

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitter = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(submitter)}>
      <div className={(Classes.myInput, Classes.title)}>
        <label htmlFor="title">Title</label>
        <input
          {...register('title', {
            required: "you haven't entered title",
          })}
          id="title"
          type="text"
        />
        <p className="error"></p>
      </div>

      <div className={(Classes.myInput, Classes.priority)}>
        <label className="priority">priority</label>
        <input
          {...register('priority', {
            required: "you haven't select a priority",
          })}
          type="radio"
          value="green"
        />
        <input
          {...register('priority', {
            required: "you haven't select a priority",
          })}
          type="radio"
          value="yellow"
        />
        <input
          {...register('priority', {
            required: "you haven't select a priority",
          })}
          type="radio"
          value="red"
        />
      </div>

      <div className={(Classes.myInput, Classes.description)}>
        <label htmlFor="description">description</label>
        <textarea
          id="description"
          {...register('description', {
            max: { value: 'max carechter 1200' },
          })}
        />
      </div>
      <input type="submit" />
    </form>
  );
};

export default AddProduct;
