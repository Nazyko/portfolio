import classes from "./Portfolio.module.css"
import Image from '../../assets/portfolio/dummy.jpg'

export const Portfolio = () => {
  return (
    <div>
      <div className="container">
        <div className={classes.portfolio}>
            <div className={classes.portfolio__title}>My <span>Portfolio</span></div>
            <div className={classes.portfolio__items}>
              <a href="https://vite-project-two-dun.vercel.app/" target='_blank' className={classes.portfolio__item}>
                <h4>E-Commerce</h4>
                <img src={Image} alt=""/>
                <div>Technologies: <span>React</span>, <span>Typescript</span>, <span>Redux-Toolkit</span>. </div>
              </a>
            </div>
        </div>
      </div>
    </div>
  )
}
