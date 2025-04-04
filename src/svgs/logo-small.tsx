import React from 'react'

type Props = {}

const logoSmall = (props: Props) => {
  return (
    <div className='tighter flex  items-center p-5 justify-center'>
      <img
        src="/MURPH.AI.png"
        alt="Logo"
        className="w-14 h-auto"
      />
      <span className="text-2xl font-semibold text-white">URPH</span>
    </div>
  )
}

export default logoSmall