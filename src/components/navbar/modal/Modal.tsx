import "./Modal.css" 

interface ModalProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>
}

export const Modal: React.FC<ModalProps> = ({ active, setActive }) => {
  return (
    <div className={active ? "modal active" : "modal" } onClick={()=> setActive(false)}>
      <div className={active ? "modal__content active" : "modal__content" } onClick={(e)=> e.stopPropagation()}>
			<div className="modal-inner">
				<button 
					onClick={()=> setActive(false)}
					style={{color: "red"}}>
					x
				</button>
				<div className="modal-items">
					<div className="" onClick={()=> setActive(false)}>
						<a href="#about">About</a>
					</div>
					<div className="" onClick={()=> setActive(false)}>
						<a href="#skills">Skills</a>
					</div>
					<div className="" onClick={()=> setActive(false)}>
						<a href="#portfolio">Portfolio</a>
					</div>
					<div className="" onClick={()=> setActive(false)}>
							<a href="#contact">Contact Me</a>		
					</div>
				</div>
			</div>        
      </div>
    </div>
  )
}
