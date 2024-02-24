// This users list will be included in boilerplate;
import UserCard from './UserCard.jsx';
import styles from './Users.module.css';


function Users(){
  const usersList= [
    {
      id: 1,
      name: "Chrisse",
      address: "4018 Sachs Trail",
      avatar: "https://placehold.co/200",
      posts: 1841,
      followers: 66868,
      isMarried: true,
    },
    {
      id: 2,
      name: "Chandler",
      address: "15 Yemem road, Yemen",
      avatar: "https://placehold.co/200",
      posts: 1433,
      followers: 20000,
      isMarried: false,
    },
  ];

  
return (
  <div className={styles.container} data-testid="users">
    <h3 className={styles.heading}>Users List</h3>

    {usersList.map((userData, index) => (
      <UserCard key={index} data={userData} />
    ))}

  </div>
);


}
export default Users;