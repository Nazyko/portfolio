import BurgerIcon from "../../assets/menu-icon.svg"
import classes from './Navbar.module.css'
import Logo from "../../assets/logo.png"
import { Modal } from "./modal/Modal"
import { useState } from "react"

export const Navbar = () => {
	const [modalActive, setModalActive] = useState<boolean>(false)
  return (
    
		<div className="container">
			<div className={classes.navbar}>
				<a href="#">
					<img className={classes.navbar__logo} src={Logo} alt="logo"/>
				</a>
				
				<button className={modalActive ? "menu-active" : "menu"} onClick={() => {setModalActive(true)}}>
					<img className={classes.menu_icon} src={BurgerIcon} alt="" />
				</button>
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
					<div className={classes.navbar__item_contact}>
						<a href="#contact">Contact Me</a>		
					</div>
				</div>
				<Modal active={modalActive} setActive={setModalActive}/>
			</div>
		</div>
   
  )
}


