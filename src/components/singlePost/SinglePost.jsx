import './singlePost.css';
import image from '../../images/image-2.jpg';
import { FaRegEdit } from 'react-icons/fa';
import { FaRegTrashAlt } from 'react-icons/fa';

const SinglePost = () => {
  return (
    <div className='singlePost'>
      <div className='singlePostWrapper'>
        <img className='singlePostImg' src={image} alt='' />
        <h1 className='singlePostTitle'>
          Lorem ipsum dolor sit amet.
          <div className='singlePostEdit'>
            <FaRegEdit className='singlePostIcon' />
            <FaRegTrashAlt className='singlePostIcon' />
          </div>
        </h1>
        <div className='singlePostInfo'>
          <span className='singlePostAuthor'>
            Author: <b>Atanas Vihrogonov</b>
          </span>
          <span className='singlePostDate'>
            Author: <b>1 hour ago</b>
          </span>
        </div>
        <p className='sinlePostDesc'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
          <br></br>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum. If you are going to use a passage of Lorem Ipsum,
          you need to be sure there isn't anything embarrassing hidden in the
          middle of text.
          <br></br>
          is that it has a more-or-less normal distribution of letters, as
          opposed to using 'Content here, content here', making it look like
          readable English. Many desktop publishing packages and web page
          editors now use Lorem Ipsum as their default model text, and a search
          <br></br>
          Various versions have evolved over the years, sometimes by accident,
          sometimes on purpose (injected humour and the like). There are many
          variations of passages of Lorem Ipsum available, but the majority have
          suffered alteration in some form, by injected humour
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
