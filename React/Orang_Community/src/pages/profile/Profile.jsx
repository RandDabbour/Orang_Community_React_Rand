import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts"

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="cover"
        />
        <img
          src="https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
  <div className="uInfo">
    <div className="left">
      <a href="http://facebook.com">
        <LinkedInIcon fontSize="large" className="icon" />
      </a>
    </div>
    <div className="center">
      <span className="name">Jane Doe</span>
      <div className="info">
        <div className="item">
          <PlaceIcon className="icon" />
          <span className="location">USA</span>
        </div>
      </div>
      <button className="editButton">Edit Profile</button>
    </div>
    <div className="right">
      <EmailOutlinedIcon className="icon" />
    </div>
  </div>
  <Posts />
</div>

    </div>
  );
};

export default Profile;
