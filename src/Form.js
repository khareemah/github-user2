import React, { useState, useEffect, useRef } from 'react';
import { FaSearch } from 'react-icons/fa';
import mockData from './mockData';
import User from './User';

const Form = () => {
  const [userName, setUserName] = useState('');
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(mockData);

  const handleSubmit = () => {
    if (userName) {
      console.log(userName);
      const url = `https://api.github.com/users/${userName}`;
      fetchUser(url);
    }
  };

  const inputEl = useRef(null);
  useEffect(() => {
    inputEl.current.focus();
  }, []);
  const fetchUser = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setUser(data);
    setLoading(false);
  };

  return (
    <>
      <form action="#" onSubmit={handleSubmit}>
        <div className="form-field">
          <div className="inputContainer">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="search github user..."
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              ref={inputEl}
            />
          </div>
          <button type="submit" className="submit-btn">
            search
          </button>
        </div>
      </form>
      <User user={user} />
    </>
  );
};
export default Form;
