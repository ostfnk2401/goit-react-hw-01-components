import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";


import users from "../data/user.json";
import data from '../data/data.json';
import friends from "../data/friends.json";

export const App = () => {
  return (
    <div> 
      <Profile username={users.username} tag={users.tag} location={users.location} avatar={users.avatar} followers={users.stats.followers} views={users.stats.views} likes={users.stats.likes}/>
      <Statistics data={data}/>
      <FriendList friends={friends}/>
    </div>
  );
};



