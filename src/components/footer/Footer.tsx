import classes from './Footer.module.css'
import Image from '../../assets/footer/Vector.png'

export const Footer = () => {
  return (
    <div>
      <div className='container'>
        <div className={classes.footer}>
            <div className={classes.footer__inner}>
                <img src={Image} alt="" />
                <h3>reypnazarovanazira@gmail.com</h3>
            </div>
        </div>
      </div>
    </div>
  )
}

