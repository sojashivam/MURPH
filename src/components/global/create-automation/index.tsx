'use client'

import { Button } from '@/components/ui/button'
import React, { useMemo } from 'react'
import Loader from '../loader'
import { AutomationDuoToneBlue } from '@/icons'
import { useCreateAutomation } from '@/hooks/use-automations'
import { v4 } from 'uuid'
import { useMutationDataState } from '@/hooks/use-mutation-data'

type Props = {}

const CreateAutomation = (props: Props) => {

  const mutationId = useMemo(()=> v4(),[]);


   const {isPending, mutate } = useCreateAutomation(mutationId)




  return (
    // work in progress we will create a automation in this 
    <Button className='lg:px-10 py-6 bg-gradient-to-br hover:opacity-80 text-white rounded-full from-[#3342CC] font-medium to-[#1C2D70]'
    onClick={()=>mutate({
      name:'Untitled',
      id: mutationId,
      createdAt: new Date(),
      keywords:[],
    })}>
      <Loader state={isPending}>
        <AutomationDuoToneBlue />
        <p className='lg-inline'> Create an Automation</p>
      </Loader>
    </Button>
  )
}

export default CreateAutomation