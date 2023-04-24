import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";


import users from "../data/user.json";
import data from '../data/data.json';

export const App = () => {
  return (
    <div> 
      <Profile username={users.username} tag={users.tag} location={users.location} avatar={users.avatar} followers={users.stats.followers} views={users.stats.views} likes={users.stats.likes}/>
      <Statistics data={data}/>
    </div>
  );
};



