import React from 'react';
import { useForm } from 'react-hook-form';

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
    <>
      <form onSubmit={handleSubmit(submitter)}>
        <div className="title">
          <label htmlFor="title">Title</label>
          <input {...register('title')} id="title" type="text" />
          <p className="error"></p>
        </div>

        <div className="priority">
          <label className="priority">priority</label>
          <input
            {...register('priority', { required: true })}
            type="radio"
            value="red"
          />
          <input
            {...register('priority', { required: true })}
            type="radio"
            value="green"
          />
          <input
            {...register('priority', { required: true })}
            type="radio"
            value="yellow"
          />
        </div>

        <div className="description">
          <label htmlFor="description">description</label>
          <textarea
            id="description"
            {...register('description', { required: true, max: 1200 })}
          />
        </div>
        <input type="submit" />
      </form>
    </>
  );
};

export default AddProduct;
