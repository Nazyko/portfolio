import classes from './Skills.module.css'
import HTML from '../../assets/skills/html.svg'
import CSS from '../../assets/skills/css.svg'
import JS from '../../assets/skills/JS.svg'
import TS from '../../assets/skills/typescript.svg'
import REACT from '../../assets/skills/React.svg'
import REDUX from '../../assets/skills/redux.svg'


export const Skills = () => {
  
  return (
    <div>
      <div className='container'>
        <div className={classes.skill}>
          <h1 className={classes.skill__title}>Soft <span>Skills</span></h1>
          <div className={classes.skill__list}>
            <div className={classes.skill__item}>
                <img src={HTML} alt="" />
                <p>HTML</p>
            </div>
            <div className={classes.skill__item}>
                <img src={CSS} alt="" />
                <p>CSS</p>
            </div>
            <div className={classes.skill__item}>
                <img src={JS} alt="" />
                <p>JavaScript</p>
            </div>
            <div className={classes.skill__item}>
                <img src={TS} alt="" />
                <p>Typescript</p>
            </div>
            <div className={classes.skill__item}>
                <img src={REACT} alt="" />
                <p>React</p>
            </div>
            <div className={classes.skill__item}>
                <img src={REDUX} alt="" />
                <p>Redux, Redux-Toolkit</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
