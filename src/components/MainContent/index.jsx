import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Navbar from "../Navbar"
import About from "../About"
import Resume from "../Resume"
import Blog from "../Blog"

const MainContent = () => {
  return (
    <div className="content-wrapper">
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/resume" component={Resume} />
          <Route path="/blog" component={Blog} />
        </Switch>
      </Router>
    </div>
  )
}

export default MainContent
