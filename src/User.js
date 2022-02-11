import React from 'react';

const User = ({ user }) => {
  const {
    login,
    twitter_username,
    created_at,
    bio,
    public_repos,
    followers,
    following,
    location,
    blog,
    html_url,
    avatar_url,
  } = user;
  const months = [
    'Jan',
    'Feb',
    'March',
    'April',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];
  const dateJoined = new Date(created_at.slice(0, 10));

  const year = dateJoined.getFullYear();
  const month = months[dateJoined.getMonth()];
  const date = dateJoined.getDate();

  const userData = [
    {
      id: 1,
      label: 'repo',
      value: public_repos,
    },
    {
      id: 2,
      label: 'followers',
      value: followers,
    },
    {
      id: 3,
      label: 'following',
      value: following,
    },
  ];

  return (
    <section className="user">
      <article className="user-image">
        <img src={avatar_url} alt="" className="photo" />
      </article>

      <article className="user-info">
        <div className="row">
          <div>
            <h1 className="name">{login}</h1>
            <a href={twitter_username}>@{twitter_username}</a>
          </div>
          <div className="date">
            joined {date} {month} {year}
          </div>
        </div>
        <p className="bio">{bio || 'User has no bio'}</p>
        <section className="section-center">
          {userData.map(({ value, label, id }) => {
            return (
              <article className="item" key={id}>
                <h3>{value}</h3>
                <p>{label}</p>
              </article>
            );
          })}
        </section>
        <div></div>
      </article>
    </section>
  );
};

export default User;
