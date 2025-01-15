import BurgerIcon from "../../assets/menu-icon.svg"
import classes from './Navbar.module.css'

export const Navbar = () => {
  return (
    <div>
		<div className="container">
			<div className={classes.navbar}>
				<a href="#about">
					<img className={classes.navbar__logo} src="../../../public/logo.png" alt="logo"/>
				</a>
				<div className={classes.navbar__items}>
					<div className={classes.navbar__item}>
						<a href="#about">About</a>
					</div>
					<div className={classes.navbar__item}>
						<a href="#skills">Skills</a>
					</div>
					<div className={classes.navbar__item}>
						<a href="#portfolio">Portfolio</a>
					</div>
					<div className={classes.navbar__item}>
						<a href="#contact">Contact Me</a>
					</div>
				</div>
				<button className="menu"><img src={BurgerIcon} alt="" /></button>
			</div>
		</div>
    </div>
  )
}


