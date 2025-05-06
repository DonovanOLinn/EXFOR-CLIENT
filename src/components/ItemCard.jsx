import React from 'react'
import { useNavigate } from 'react-router-dom'
import EX1 from '../assets/EX1.jpg'
import EX2 from '../assets/EX2.jpg'
import EX3 from '../assets/EX3.jpg'
import EX3_5 from '../assets/EX3.5.jpg'
import EX4 from '../assets/EX4.jpg'
import EX5 from '../assets/EX5.jpg'
import EX6 from '../assets/EX6.jpg'
import EX7 from '../assets/EX7.jpg'
import EX7_5 from '../assets/EX7.5.jpg'
import EX8 from '../assets/EX8.jpg'
import EX9 from '../assets/EX9.jpg'
import EX10 from '../assets/EX10.jpg'
import EX11 from '../assets/EX11.jpg'
import EX12 from '../assets/EX12.jpg'
import EX13 from '../assets/EX13.jpg'
import EX14 from '../assets/EX14.jpg'
import EX15 from '../assets/EX15.jpg'
import EX16 from '../assets/EX16.jpg'
import EX17 from '../assets/EX17.jpg'
import EX18 from '../assets/EX18.jpg'
import M1 from '../assets/M1.jpg'
import M2 from '../assets/M2.jpg'

export default function ItemCard({search, val}) {
  const navigate = useNavigate()

  const namesObject = {
    "ExForce_1:_Columbus_Day": EX1,
    "ExForce_2:_Spec_Ops": EX2,
    "ExForce_3:_Paradise": EX3,
    "ExForce_3.5:_Trouble_on_Paradise": EX3_5,
    "ExForce_4:_Black_Ops": EX4,
    "ExForce_5:_Zero_Hour": EX5,
    "ExForce_6:_Mavericks": EX6,
    "ExForce_7:_Renegades": EX7,
    "ExForce_7.5:_Homefront": EX7_5,
    "Mavericks_Book_1:_Deathtrap": M1,
    "ExForce_8:_Armageddon": EX8,
    "ExForce_9:_Valkyrie": EX9,
    "Mavericks_Book_2:_Freefall": M2,
    "ExForce_10:_Critical_Mass": EX10,
    "ExForce_11:_Brushfire": EX11,
    "ExForce_12:_Breakaway": EX12,
    "ExForce_13:_Fallout": EX13,
    "ExForce_14:_Match_Game": EX14,
    "ExForce_15:_Failure_Mode": EX15,
    "ExForce_16:_Aftermath": EX16,
    "ExForce_17:_Task_Force_Hammer": EX17
  };
  


  return (
    <div className='card' onClick={() => navigate(`/${search}/${val.id}`)}>
      <h2 className='card-title'>{val.name}</h2>
      <img src={namesObject[val.name]} alt="Image Unavailable" width='250px'/>
      <p className='card-description'>{val.author_summary}</p>
  </div>
  )
}
