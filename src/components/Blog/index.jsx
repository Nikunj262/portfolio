import { blog1, CloudComputing, API, VersionControl, blog5 } from "../../assets/images"

// blogs dummy data
const blogs = [
  {
    bannerImage: blog1,
    title: 'Motion UI in React',
    category: 'Design',
    date: 'Feb 23, 2022',
    description: 'Elevate User Experience: Mastering Motion UI in React',
  },
  {
    bannerImage: CloudComputing,
    title: 'Cost Optimization in Cloud Computing',
    category: 'Cloud Computing',
    date: 'Jan 02, 2022',
    description: 'Discuss strategies and best practices for optimizing cloud costs, including reserved instances, auto-scaling, and resource allocation.',
  },
  {
    bannerImage: API,
    title: 'Building RESTful APIs for Full Stack Applications',
    category: 'Development',
    date: 'Mar 15, 2022',
    description: 'A step-by-step guide to designing and implementing RESTful APIs to connect the frontend and backend of your full stack application.',
  },
  {
    bannerImage: VersionControl,
    title: 'Version Control: Git and GitHub',
    category: 'Development',
    date: 'Feb 01, 2022',
    description: 'Discuss the importance of version control and collaboration tools for efficient teamwork in full stack development projects.',
  },
  {
    bannerImage: blog5,
    title: 'Data-Driven Decision Making in Marketing',
    category: 'Marketing',
    date: 'Feb 23, 2022',
    description: 'Highlight the importance of data analysis in making informed marketing decisions and improving ROI.',
  },
]

const Blog = () => {
  return (
    <>
      <article className="blog" data-page="blog">
        <header>
          <h2 className="h2 article-title">Blog</h2>
        </header>

        <section className="posts-section">
          <ul className="blog-posts-list">

            {blogs.map(blog => (
              <li className="blog-post-item">
                <a href="/">

                  <figure className="blog-banner-box">
                    <img src={blog.bannerImage} alt="Design conferences in 2022" loading="lazy" />
                  </figure>

                  <div className="blog-content">

                    <div className="blog-meta">
                      <p className="blog-category">{blog.category}</p>

                      <span className="bullet-point"></span>

                      <time>{blog.date}</time>
                    </div>

                    <h3 className="h3 blog-item-title">{blog.title}</h3>

                    <p className="blog-text">
                      {blog.description}
                    </p>

                  </div>

                </a>
              </li>
            ))}

          </ul>
        </section>
      </article>
    </>
  )
}

export default Blog
