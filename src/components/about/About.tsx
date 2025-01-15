import Picture from "../../assets/picture4.jpg"
import classes from './About.module.css'

export const About = () => {
  return (
    <div>
      <div className="container">
        <div className={classes.about} id="about">
          <div className={classes.about__img_box}>
            <img className={classes.about__img} src={Picture}/>
          </div>
          <div className={classes.about__text_box}>
            <p className={classes.about__title}>Hi !<br/> <span>I’m Nazira. <br/>a Front-End Developer</span></p>
            <p>Front-End developer based in Bekasi, Indonesian <br /> I’am coding with a clean and beautiful problem
solving in mind.</p>
          </div>
        </div>
      </div>
    </div>   
  )
}

