import './settings.css';
import Sidebar from '../../components/sidebar/Sidebar';
import image from '../../images/image-1-removebg.jpg';
import { AiOutlineUserAdd } from 'react-icons/ai';

const Settings = () => {
  return (
    <div className='settings'>
      <div className='settingsWrapper'>
        <div className='settingsTitle'>
          <span className='settingsUpdateTitle'>Update Your Account</span>
          <span className='settingsDeleteItem'>Delete Account</span>
        </div>

        <form action='' className='settingsForm'>
          <label>Profile Picture</label>

          <div className='settingsPP'>
            <img src={image} alt='' />
            <label htmlFor='fileInput'>
              <AiOutlineUserAdd className='settingsPPIcon' />
            </label>
            <input type='file' id='fileInput' style={{ display: 'none' }} />
          </div>

          <label>Username</label>
          <input type='text' placeholder='Atanas Vihrogonov' />
          <label>Email</label>
          <input type='email' placeholder='vihrogonov@gmail.com' />
          <label>Password</label>
          <input type='password' />
          <button className='settingsSubmit'>Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;
