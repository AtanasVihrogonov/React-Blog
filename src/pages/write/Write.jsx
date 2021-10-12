import React from 'react';
import './write.css';
import { AiFillFolderAdd } from 'react-icons/ai';
import image from '../../images/image-2.jpg';

const Write = () => {
  return (
    <div className='write'>
      <img className='writeImg' src={image} alt="" />
      <form className='writeForm'>
        <div className='writeFormGroup'>
          <label htmlFor='fileInput' >
            <AiFillFolderAdd className='writeIcon' />
          </label>
          <input type='file' id='fileInput' style={{ display: 'none' }} />
          <input
            type='text'
            placeholder='Title...'
            className='writeInput'
            autoFocus={true}
          />
        </div>
        <div className='writeFormGroup'>
          <textarea
            placeholder='Tell your story...'
            name='textarea'
            type='text'
            className='writeInput writeText'
            // cols='30'
            // rows='10'
          ></textarea>
        </div>
        <button className='writeSubmit'>Publish</button>
      </form>
    </div>
  );
};

export default Write;
