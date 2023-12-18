import {Avatar_Icon1} from '../../assets/images';

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

const SideBar = ({ name, position, email, phone, birthday, location }) => {
  return (
    <aside className="sidebar" data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={Avatar_Icon1} alt="Richard Gilfoyle" width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Richard Gilfoyle">{name}</h1>
          <p className="title">{position}</p>
        </div>
      </div>

      <div className="sidebar-info_more">
        <div className="divider"></div>

        <ul className="contacts-list">
        <li className="contact-item">
            <div className="icon-box">
              <CalendarMonthOutlinedIcon />
            </div>
            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time>{birthday}</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <EmailOutlinedIcon />
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href={`mailto:${email}`} className="contact-link">{email}</a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <LocalPhoneOutlinedIcon />
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href={`tel:${phone.replace(" ", "")}`} className="contact-link">{phone}</a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <LocationOnOutlinedIcon />            
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <span>{location}</span>
            </div>
          </li>
        </ul>

        <div className="divider"></div>

        <ul className="social-media-platform">
        <li className="social-media-icon">
            <a href="/" className="social-media-paltform-link">
              <GitHubIcon />
            </a>
          </li>

          <li className="social-media-icon">
            <a href="/" className="social-media-paltform-link">
              <TwitterIcon />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default SideBar
