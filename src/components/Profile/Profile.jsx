// import ReactDOM from 'react-dom';
// import { App } from '../App'
// import users from '../Profile/user.json'

export default function Profile(props) {
    const {username, tag, location, avatar, stats} = props; //.followers, stats.views, stats.likes 

    return <div class="profile">
    <div class="description">
      <img
        src={avatar}
        alt="User avatar"
        class="avatar"
      />
      <p class="name">{username}</p>
      <p class="tag">@{tag}</p>
      <p class="location">{location}</p>
    </div>

    <ul class="stats">
      <li>
        <span class="label">Followers</span>
        <span class="quantity">{stats.followers}</span>
      </li>
      <li>
        <span class="label">Views</span>
        <span class="quantity">{stats.views}</span>
      </li>
      <li>
        <span class="label">Likes</span>
        <span class="quantity">{stats.likes}</span>
      </li>
    </ul>
  </div>
}

// ReactDOM.createRoot(document.querySelector('#root')).render(<App/>)
// const profile = ();
