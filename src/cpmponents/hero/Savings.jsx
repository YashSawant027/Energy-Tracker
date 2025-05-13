import { faBolt, faLeaf } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Savings() {
  return (
    <div className=' py-4 max-w-[700px] m-auto mt-3'>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-[5rem] px-2'>
            <div className=' flex gap-2  items-center justify-center bg-white rounded-[20px] text-center py-2'>
                <FontAwesomeIcon icon={faBolt}/>
                Save upto 30% off on bills
            </div>
            <div className=' flex gap-2 items-center justify-center bg-white rounded-[20px] text-center py-2'>
                <FontAwesomeIcon icon={faLeaf}/>
                Reduce CO2 emissions
            </div>
        </div>
    </div>
  )
}

export default Savings