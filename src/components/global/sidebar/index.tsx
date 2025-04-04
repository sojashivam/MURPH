'use client'


import { usePaths } from '@/hooks/user-nav'

import React from 'react'
import Items from './items'
import { Separator } from '@/components/ui/separator'
import { HelpDuoToneWhite } from '@/icons'
import ClerkAuthState from '../clerk-auth-state'
import { SubscriptionPlan } from '../subscription-plan'
import UpgradeCard from './upgrade'


type Props = {
    slug: string


}

const Sidebar = ({ slug }: Props) => {


    const { page } = usePaths();
    // console.log('page->>>',page )
    return (
        <div className='w-[250px] border-[1px] radial fixed left-0 lg:inline-block border-[#545454] bg-gradient-to-b from-[#768bdd] via-[#171717] to-[#768bdd] hidden bottom-0 top-0 m-3 rounded-3xl overflow-hidden'>

            <div className='flex flex-col gap-y-5 w-full h-full p-3 bg-[#0e0e0e] bg-opacity-90 bg-clip-padding backdrop-filter backdrop--blur__safari backdrop-blur-3xl'>

                <div className='tighter flex  items-center p-5 justify-center'>
                    <img
                        src="/MURPH.AI.png"
                        alt="Logo"
                        className="w-14 h-auto"
                    />
                    <span className="text-2xl font-semibold text-white">URPH</span>
                </div>

                <div className='flex flex-col py-3 '>

                    <Items page={page} slug={slug} />

                </div>

                <div className='px-16 '>
                    <Separator
                        orientation='horizontal'
                        className="bg-[#333336]"
                    />
                </div>
                <div className='px-3 flex flex-col gap-y-5'>
                    <div className='flex gap-x-2'>
                        <ClerkAuthState />
                        <p className='text-[#9b9ca0]'>Profile</p>
                    </div>
                    <div className='flex gap-x-3'>
                        <HelpDuoToneWhite />
                        <p className='text-[#9b9ca0]'>Help</p>
                    </div>
                </div>

                <SubscriptionPlan type="FREE" >
                    <div className='flex-1 flex flex-col justify-end'>
                        <UpgradeCard />
                    </div>
                </SubscriptionPlan>
            </div>
        </div>
    )
}

export default Sidebar
