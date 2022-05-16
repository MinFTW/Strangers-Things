import React, { useState } from 'react';
import { createPost } from '../api';
import '../css/NewPost.css';

const NewPost = ({ token }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [willDeliver, setWillDeliver] = useState(false);

  const handleCheckbox = () => {
    willDeliver === false ? setWillDeliver(true) : setWillDeliver(false);
  };

  return (
    <div>
      <fieldset id='new-post'>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            createPost(title, description, price, location, willDeliver, token);
            alert('Post created successfully');
            setTitle('');
            setDescription('');
            setPrice('');
            setLocation('');
          }}
        >
          <h2>New Post</h2>
          <div>
            <input
              type='text'
              placeholder='Add a title'
              minLength='1'
              maxLength='50'
              required
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            ></input>
          </div>

          <div>
            <input
              type='text'
              placeholder='Add description'
              minLength='1'
              maxLength='200'
              required
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            ></input>
          </div>

          <div>
            <input
              type='text'
              placeholder='Enter price'
              minLength='1'
              maxLength='50'
              required
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            ></input>
          </div>

          <div>
            <input
              type='text'
              placeholder='Location (optional)'
              minLength='1'
              maxLength='50'
              value={location}
              onChange={(event) => setLocation(event.target.value)}
            ></input>
          </div>

          <div>
            <fieldset id='new-post-delivery'>
              <legend>Will Deliver? (optional)</legend>
              <label htmlFor='yes'>Yes</label>
              <input
                type='checkbox'
                name='yes'
                value={willDeliver}
                onChange={(event) => {
                  handleCheckbox(event);
                }}
              ></input>
            </fieldset>
          </div>

          <button type='submit'>Submit Post</button>
        </form>
      </fieldset>
    </div>
  );
};

export default NewPost;
