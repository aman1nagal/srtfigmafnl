 import React, { useState } from 'react'
 import {AiOutlineHeart} from 'react-icons/ai'
 import {PiPencilSimpleLineThin} from 'react-icons/pi'
 import { CiMail} from 'react-icons/ci'
 import { AiOutlinePhone,AiOutlineGlobal} from 'react-icons/ai'

 import {MdDelete}  from 'react-icons/md'
import Modal from './Modal'
  const UserData = ({ keys,name, email, website, address,onDelete ,data,setData}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
    return (
      <>
      {isModalOpen?<Modal keys={keys} isOpen={openModal} onClose={closeModal} data={data} setData={setData}/>:''}
      <div className="user-cart">
        <div className='image-div'>
        <img src='https://avatars.dicebear.com/v2/avataaars/%7B%7Busername%7D%7D.svg?options%5bmood%5d%5b%5d=happy' className='image'/>
        </div>
      <div className='center_data'>
      <h2 className='heading'>{name}</h2>
      <div className='mail'> 
      <CiMail  />
      <p>Email: {email}</p>
      </div>
      <div className='address'> 
      <AiOutlineGlobal />
      <p>
        Address: {address.street}, {address.suite}, {address.city}, {address.zipcode}
      </p>
      </div>
      <div className='mail'> 
      <AiOutlinePhone />
      <p>Website: {website}</p>
      </div>
      </div>
      <div className='button'>
     <button className="heart-button"><AiOutlineHeart color='red'/></button>
     <div className="vertical-line"></div>
     <button className="pencil-button" onClick={()=>setIsModalOpen(true)}><PiPencilSimpleLineThin  /></button>
     <div className="vertical-line"></div>
     <button className="delete-button" onClick={()=>onDelete(keys)}><MdDelete /></button>
   </div>
    </div>
   </>
    )
  }
  
  export default UserData
  