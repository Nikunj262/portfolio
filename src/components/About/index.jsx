import {  Avatar_Icon2, Avatar_Icon3, Avatar_Icon4, Avatar_Icon5 } from "../../assets/images"
import LanguageIcon from '@mui/icons-material/Language';
import AndroidIcon from '@mui/icons-material/Android';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import WebIcon from '@mui/icons-material/Web';

const testimonials = [
  {
    profilePic: Avatar_Icon4,
    name: 'Shivam Patel',
    description: `Working with Nikunj Patel has been a game-changer for our team. His ability to lead and collaborate has elevated our projects to new heights. A true professional with an eye for detail and a commitment to excellence. I highly recommend Nikunj Patel for anyone looking to drive success in their projects.`,
  },
  {
    profilePic: Avatar_Icon5,
    name: 'Nikunj Patel',
    description: `I had the pleasure of working with Shivam Patel on a critical project, and the results were outstanding. His expertise in Web Development is unparalleled, and he consistently went above and beyond to ensure our objectives were not only met but exceeded. A reliable and dedicated professional who I would highly recommend.`,
  },
  {
    profilePic: Avatar_Icon3,
    name: 'Akash',
    description: `Paulomi is not just a colleague; she are a true team player. Her collaborative spirit and innovative thinking bring a positive energy to our project. I've witnessed her ability to navigate challenges with grace and deliver exceptional results.`,
  },
  {
    profilePic: Avatar_Icon2,
    name: 'Paulomi Parikh',
    description: `In our fast-paced environment, Akash consistently stands out for his ability to remain calm under pressure and navigate complex tasks with finesse. His problem-solving skills have been instrumental in overcoming challenges, and his contributions have significantly impacted the success of our team initiatives.`,
  },
]

const services = [
  {
    title: 'Full Stack Development',
    icon: <LanguageIcon />,
    description: `Mastery in both frontend and backend development, enabling the creation of complete, dynamic web applications that offer seamless user experiences.`,
  },
  {
    title: 'Android Development',
    icon: <AndroidIcon />,
    description: `Proficient in Java , I specialize in developing robust and scalable Android applications that deliver exceptional UI/UX design.`,
  },
  {
    title: 'Project Management',
    icon: <Diversity3Icon />,
    description: `As a  Project Manager, I bring a wealth of experience in leading and delivering successful projects from initiation to completion. With a meticulous eye for detail and a strategic approach, I thrive in dynamic environments, ensuring projects are executed on time, within scope, and to the highest standards.`,
  },
  {
    title: 'SEO',
    icon: <WebIcon />,
    description: `I'm a results-driven SEO Specialist with a passion for optimizing online visibility and driving organic traffic. With a keen understanding of search engine algorithms and a commitment to staying ahead of industry trends, I specialize in crafting effective strategies to enhance website rankings and maximize online presence.`,
  },
]

const About = () => {
  return (
    <>
      <article className="about  active" data-page="about">
        <header>
          <h2 className="h2 article-title">About me</h2>
        </header>

        <section className="about-text">
          <p>
          I am a Full Stack Developer with a deep-rooted passion for crafting innovative web solutions. I thrive on the dynamic challenges of coding, problem-solving, and creating user-centric experiences that leave a lasting impact. 
          </p>

          <p>
          I've contributed to the development of robust and scalable web applications, leveraging a strong foundation in both front-end and back-end technologies. My approach is marked by a blend of creativity, meticulous attention to detail, and a commitment to delivering high-quality software solutions
          </p>
        </section>

        <section className="service">
          <h3 className="h3 service-title">What i'm doing</h3>
          <ul className="service-list">

            {services.map(service => (
              <li className="service-item">
                <div className="service-icon-box">
                  {service.icon}
                </div>

                <div className="service-content-box">
                  <h4 className="h4 service-item-title">{service.title}</h4>
                  <p className="service-item-text">
                    {service.description}
                  </p>
                </div>
              </li>
            ))}

          </ul>
        </section>

        <section className="testimonials">
          <h3 className="h3 testimonials-title">Testimonials</h3>
          <ul className="testimonials-list has-scrollbar">

            {testimonials.map(item => (
              <li className="testimonials-item">
                <div className="content-card" data-testimonials-item>

                  <figure className="testimonials-avatar-box">
                    <img src={item.profilePic} alt="Richard Handriks" width="60" data-testimonials-avatar />
                  </figure>

                  <h4 className="h4 testimonials-item-title" data-testimonials-title>{item.name}</h4>

                  <div className="testimonials-text" data-testimonials-text>
                    <p>
                      {item.description}
                    </p>
                  </div>

                </div>
              </li>
            ))}

          </ul>
        </section>
      </article>
    </>
  )
}

export default About
