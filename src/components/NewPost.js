import { Button } from '@mui/material';
import React, { useState } from 'react';
import { createNewPost } from '../api';

const NewPost = ({ localToken }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
//   const [willDeliver, setWillDeliver] = useState('');

  return (
    <div>
      <fieldset id='new-post'>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            createNewPost(
            //   localToken,
              title,
              description,
              price,
            //   willDeliver
            );
          }}
        >
          <h2>New Post</h2>
          <div>
            {/* <label htmlFor='title'>Title</label> */}
            <input
              type='text'
              name='title'
              placeholder='Enter a title'
              minLength='1'
              maxLength='50'
              required
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            ></input>
          </div>

          <div>
            {/* <label htmlFor='description'>Description</label> */}
            <input
              type='text'
              name='description'
              placeholder='Enter a description'
              minLength='1'
              maxLength='50'
              required
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            ></input>
          </div>

          <div>
            {/* <label htmlFor='price'>Price</label> */}
            <input
              type='text'
              name='price'
              placeholder='Enter a price'
              minLength='1'
              maxLength='50'
              required
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            ></input>
          </div>

          {/* <div>
            <label htmlFor='willdeliver'>Will Deliver?</label>
            <input
              type='text'
              name='willdeliver'
              placeholder='Will Deliver?'
              value={willDeliver}
              onChange={(event) => setWillDeliver(event.target.value)}
            ></input>
          </div> */}
          <button type='submit'>Add Post</button>
        </form>
      </fieldset>
    </div>
  );
};

export default NewPost;
