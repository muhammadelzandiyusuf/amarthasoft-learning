import type { NextPage } from 'next';
import { useDispatch, useSelector } from 'react-redux';

// eslint-disable-next-line import/extensions
import { selectAuthState, setAuthState } from '@/store/auth/authSlice';

const Home: NextPage = () => {
  const authState = useSelector(selectAuthState);
  const dispatch = useDispatch();

  return (
    <div>
      <div>{authState ? 'Logged in' : 'Not Logged In'}</div>
      <button
        onClick={() => (authState ? dispatch(setAuthState(false)) : dispatch(setAuthState(true)))}
      >
        {authState ? 'Logout' : 'LogIn'}
      </button>
    </div>
  );
};

export default Home;
