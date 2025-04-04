import React from 'react'
import {
    Sheet as ShadecnSheet,
    SheetContent,
    SheetTrigger
} from '@/components/ui/sheet'

type Props = {
    trigger: React.ReactNode
    children: React.ReactNode
    classname?: string;
    side: 'left' | 'right';

}

const Sheet = ({ children, trigger, classname, side }: Props) => {
    return (
        <ShadecnSheet>
            <SheetTrigger className={classname}>
                {trigger}
            </SheetTrigger>
            <SheetContent
             side={side}
             className='p-0'>
                {children}
            </SheetContent>
        </ShadecnSheet>
    )
}

export default Sheet