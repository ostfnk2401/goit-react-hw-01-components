import PropTypes  from "prop-types";
import { ProfileBox, ProfileDescr, ProfilePhoto, ProfileName, ProfileTag, ProfileLocation, ProfileStatsList, ProfileStatsItem } from "./Profile.styled";

export const Profile = ({ username, tag, location, avatar, followers, views, likes}) => {
  return (
    <ProfileBox>
      <ProfileDescr>
        <ProfilePhoto src={avatar} alt="User avatar"/>
        <ProfileName>{username}</ProfileName>
        <ProfileTag>@{tag}</ProfileTag>
        <ProfileLocation>{location}</ProfileLocation>
      </ProfileDescr>

      <ProfileStatsList>
        <ProfileStatsItem>
          <span>Followers</span>
          <span>{followers}</span>
        </ProfileStatsItem>
        <ProfileStatsItem>
          <span>Views</span>
          <span>{views}</span>
        </ProfileStatsItem>
        <ProfileStatsItem>
          <span>Likes</span>
          <span>{likes}</span>
        </ProfileStatsItem>
      </ProfileStatsList>
    </ProfileBox>
  );
};

Profile.propTypes = {
    username: PropTypes.string.isRequired, 
    tag: PropTypes.string.isRequired, 
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired, 
    likes: PropTypes.number.isRequired
};