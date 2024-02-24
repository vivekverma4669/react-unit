import styles from './Users.module.css';


function UserCard({ data }) {
  const {
    avatar,
    name,
    address,
    posts,
    followers,
    isMarried,
  } = data;

  const followUser = () => {
    alert(`You are now following ${name}`);
  };

  return (
    <div className={styles.UserCard}>

      <img src={avatar} alt="User Avatar" />
      
      <h2 data-testid="user_name">{name}</h2>
      <p data-testid="user_address">{address}</p>

      <h3>Posts</h3>
      <p data-testid="user_posts">{posts}</p>
      <h3>Followers</h3>
      <p data-testid="user_followers">{followers}</p>
      <h3>Married</h3>
      <p data-testid="is-married">{isMarried ? "Yes" : "No"}</p>
      <button onClick={followUser}>Follow</button>

    </div>
  );
}

export default UserCard;