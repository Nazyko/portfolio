import classes from "./Portfolio.module.css"
import Tovaradar from '../../assets/portfolio/tovaradar.jpg'
import Banking from '../../assets/portfolio/banking-app.jpg'

export const Portfolio = () => {
  return (
    <div>
      <div className="container">
        <div className={classes.portfolio} id="portfolio">
            <div className={classes.portfolio__title}>My <span>Portfolio</span></div>
            <div className={classes.portfolio__items}>
              <a href="https://tovaradar-delta.vercel.app/" target='_blank' className={classes.portfolio__item}>
                <h4>E-Commerce</h4>
                <img src={Tovaradar} alt=""/>
                <div>Technologies: <span>React</span>, <span>Typescript</span>, <span>React-Query</span>, <span>Redux-Toolkit</span>. </div>
              </a>
              <a href="https://resilient-pie-04f94e.netlify.app/" target='_blank' className={classes.portfolio__item}>
                <h4></h4>
                <img src={Banking} alt=""/>
                <div>Technologies: <span>HTML</span>, <span>CSS</span>.</div>
              </a>
            </div>
        </div>
      </div>
    </div>
  )
}
