import classes from "./Contact.module.css"
import Background from '../../assets/contact/Vector.png'
import Github from '../../assets/contact/github-mark-white.svg'
import Telegram from '../../assets/contact/telegram.svg'
import Phone from '../../assets/contact/call.svg'

export const Contact = () => {
  return (
    <>
      <div>
        <div className="container">
          <div className={classes.contact} id="contact">
            <h3 className={classes.contact__title}>Contact <span>Me</span></h3>
            <div className={classes.contact__items}>
              <a href="https://github.com/Nazyko" target='_blank' className={classes.contact__item}>
                <div>
                  <img className={classes.contact__item_icon} src={Github} alt="" />
                  <img src={Background} alt="" />
                </div>
                <h4 className={classes.contact__item_title}>Github</h4>
              </a>
              <a href="https://t.me/nazyko" target='_blank' className={classes.contact__item}>
                <div>
                  <img className={classes.contact__item_icon} src={Telegram} alt="" />
                  <img src={Background} alt="" />
                </div>
                <h4 className={classes.contact__item_title}>Telegram</h4>
              </a>
              <a href="#" target='_blank' className={classes.contact__item}>
                <div>
                  <img className={classes.contact__item_icon} src={Phone} alt="" />
                  <img src={Background} alt="" />
                </div>
                <h4 className={classes.contact__item_title}>Phone</h4>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

