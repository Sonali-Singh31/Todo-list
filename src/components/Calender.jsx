import React,{useContext, useState} from 'react'
import { CalendarDate,CaretUp } from 'react-bootstrap-icons'
import{calendarItems} from '../constants'
import { TodoContext } from '../context';
import { useSpring,animated } from 'react-spring';
const Calender = () => {
  // CONTEXT
  const {setSelectedProject} = useContext(TodoContext)
  // STATE
  const [showMenu,setShowMenu] = useState(true);

  // ANIMATED
  const spin = useSpring({
    transform:showMenu?'rotate(0deg)':'rotate(180deg)',
    config:{friction:15}
  })

  const menuAnimation = useSpring({
    display : showMenu ? 'block':'none',
    lineHeight: showMenu?'1.2':'0'
  })

  // STATE
  return (

    <div className='Calendar'>
      <div className="header">
        <div className='flex align-middle'>
      <div className="title">
          <CalendarDate size="18"/>
          <p>Calendar</p>
        </div>
        <animated.div 
          style={spin} 
          onClick={()=>setShowMenu(!showMenu)}
          className="btns"
        >
          <span>
            <CaretUp size="20"/>
          </span>
        </animated.div>
      </div>
      </div>

      <animated.div style={menuAnimation} className="items">
        {
          calendarItems.map(item=>
            <div 
              className="item" 
              key={item}
              onClick={()=>setSelectedProject(item)}
              >
              {item}
            </div>
          )
        }
      </animated.div>
    </div>
  )
}

export default Calender
