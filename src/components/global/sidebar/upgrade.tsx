import React from 'react'
import PaymentButton from '../payment-button'

type Props = {}

const UpgradeCard = (props: Props) => {
  return (
    <div className='bg-[#252525] p-3 rounded-xl flex flex-col gap-y-3'>
        <span className='text-sm'>
            Upgrade to {''}
            <span className='bg-gradient-to-r from-[#cc3bd4] to-[#d064ac] font-bold bg-clip-text text-transparent'>
                Smart AI 
            </span>
        </span>
        <p className='text-[#9b9ca0] font-light text-sm'>
            Unlock all features <br/> including AI and more
        </p>
        <PaymentButton />
    </div>
  )
}

export default UpgradeCard