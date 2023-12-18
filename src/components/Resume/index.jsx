import MenuBookIcon from '@mui/icons-material/MenuBook';

const roles = [
  {
    position: 'Fullstack Developer',
    timeline: '2021 - Present',
    description: 'As a Full Stack Developer, I bring a wealth of experience in the end-to-end development of web applications. With a strong foundation in both front-end and back-end technologies, I have successfully contributed to the design, implementation, and maintenance of robust and scalable applications. Proficient in languages such as HTML, CSS, and JavaScript for the front end, and experienced in technologies like Node.js, Express and MongoDB for backend.',
  },
  {
    position: 'Web Developer Intern',
    timeline: '2019 - 2021',
    description: 'As a Web Development Intern, I actively contributed to the design, development, and maintenance of web applications. Working closely with seasoned developers, I gained hands-on experience in coding with languages such as HTML, CSS, and JavaScript, while also exploring the principles of responsive web design. This internship provided a valuable opportunity to enhance my technical skills, collaborate effectively within a team, and make significant contributions to the ever-evolving field of web development.',
  },
  {
    position: 'Android Developer',
    timeline: '2018 - 2019',
    description: 'As an Android Development Intern, I actively contributed to the design, development, and maintenance of Android applications. Collaborating closely with experienced developers, I gained hands-on experience in coding with Java.',
  },
]

const education = [
  {
    title: 'Conestoga College',
    timeline: '2022 - 2023',
    description: 'Pursued a comprehensive education in web development with FullStack technologies and Android Application development, earning Post Graduation in Web Development.',
  },
  {
    title: 'Computer Science and Engineering',
    timeline: '2016 - 2020',
    description: 'During my undergraduate studies in Computer Science Engineering,  I cultivated a robust skill set and gained a comprehensive understanding of core concepts in computer science. My coursework encompassed a diverse range of subjects, providing a solid foundation in both theoretical principles and practical applications.',
  },
]

const skills = [
  {
    skillTitle: 'React.js',
    proficiency: 80,
  },
  {
    skillTitle: 'Node.js',
    proficiency: 75,
  },
  {
    skillTitle: 'JavaScript',
    proficiency: 75,
  },
  {
    skillTitle: 'Android-Java',
    proficiency: 70,
  },
]

const Resume = () => {
  return (
    <>
      <article className="resume">
        <header>
          <h2 className="h2 article-title">Resume</h2>
        </header>

        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <MenuBookIcon />
            </div>
            <h3 className="h3">Experience</h3>
          </div>

          <ol className="timeline-list">
            {roles.map((role) => (
              <li className="timeline-item">
                <h4 className="h4 timeline-item-title">{role.position}</h4>
                <span>{role.timeline}</span>
                <p className="timeline-text">
                  {role.description}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <MenuBookIcon />
            </div>
            <h3 className="h3">Education</h3>
          </div>

          <ol className="timeline-list">
            {education.map(education => (
              <li className="timeline-item">
                <h4 className="h4 timeline-item-title">{education.title}</h4>
                <span>{education.timeline}</span>
                <p className="timeline-text">
                  {education.description}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section className="skill">
          <h3 className="h3 skills-title">My skills</h3>
          <ul className="skills-list content-card">
            {skills.map(skill => (
              <li className="skills-item">
                <div className="title-wrapper">
                  <h5 className="h5">{skill.skillTitle}</h5>
                  <span>{skill.proficiency}%</span>
                </div>

                <div className="skill-progress-bg">
                  <div className="skill-progress-fill" style={{ width: `${skill.proficiency}%` }}></div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </>
  )
}

export default Resume
