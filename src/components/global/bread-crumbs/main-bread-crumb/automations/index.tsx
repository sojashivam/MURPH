    'use client'
    import ActivateAutomationButton from '@/components/global/activate-automation-button'
    import { Input } from '@/components/ui/input'
    import { useEditAutomation } from '@/hooks/use-automations'
    import { useMutationDataState } from '@/hooks/use-mutation-data'
    import { useQueryAutomation } from '@/hooks/user-queries'
    import { PencilDuoToneBlack } from '@/icons'
    import { ChevronRight, PencilIcon } from 'lucide-react'
    import React from 'react'

    type Props = {
        id: string
    }

    const AutomationsBreadCrumb = ({ id }: Props) => {


        const { data } = useQueryAutomation(id);

        const { edit, enableEdit, disableEdit, inputRef, isPending, } = useEditAutomation(id);

        const { latestVariable } = useMutationDataState(['update-automation'])

        return (
            <div className='rounded-full w-full p-5 bg-[#18181b1a] flex items-center'>
                <div className='flex items-center gap-x-3 min-w-0'>
                    <p className='text-[#9b9ca0] truncate'>Automations</p>
                    <ChevronRight
                        color='#9b9ca0'
                        className='flex-shrink-0' />

                    <span className='flex gap-x-3 items-center min-w-0'>
                        {/* WIP: SHOW EDITING DATA  */}
                        {edit ? (
                            <Input
                                ref={inputRef}
                                placeholder={isPending ? latestVariable.variables : 'Add a new name'}
                                className='bg-transparent h-auto outline-none text-base border-none p-0'
                            />
                        ) : (
                            <p className='text-[#9b9ca0] truncate'>
                                {latestVariable?.variables ? latestVariable.variables.name : data?.data?.name}
                            </p>
                        )}


                        {edit? (
                            <></>
                        ):(
                            <span className='cursor-pointer hover:opacity-75 duration-100 transition flex-shrink-0 mr-4'
                            onClick={enableEdit}>
                            <PencilIcon size={14}/>
                        </span>
                        )}


                    
                    </span>
                </div>

                <div className='flex items-center ml-auto  gap-x-5 '>
                    <p className=' hidden md:block text-text-secondary/60 text-sm  truncate min-w-0 '>All updates are automatically saved</p>
                    <div className='flex gap-x-5 flex-shrink-0'>
                        <p className='text-text-secondary text-sm truncate min-w-0'>Changes saved</p>
                    </div>
                </div>

                <ActivateAutomationButton id={id} />
            </div>
        )
    }

    export default AutomationsBreadCrumb