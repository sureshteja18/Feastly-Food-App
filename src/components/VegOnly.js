import React from 'react'
import classNames from 'classnames'

const VegOnly = ({handletoggle,showVegOnly}) => {
 

  return (
    
    <div className='flex items-center my-4 mx-2'>
    <button className={classNames('flex w-10 h-5 bg-slate-200 rounded-full transition-all duration-300',{'bg-green-600': showVegOnly })} onClick={handletoggle}>
     <div className={classNames('h-5 w-5 bg-green-600 rounded-full shadow-md transition-all duration-300',{'ml-5 bg-white': showVegOnly})}></div>
    </button>
    <h2 className="text-sm text-green-600 px-2 font-bold">{showVegOnly ? 'SHOW ALL' : 'VEG ONLY'}</h2>
    </div>

  )
}

export default VegOnly;