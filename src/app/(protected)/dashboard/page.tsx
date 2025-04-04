// scenario 1 => repeated user
    // respect dashboard 
    // redirect-> /dashboard/shivammishra


// scenario 2 -> new user
   // redirect to sign-in

import { onBoardUser } from '@/actions/user';
import { redirect } from 'next/navigation';

import React from 'react'

type Props = {}

const Page =  async (props: Props) => {

  const user = await onBoardUser();

  if(user.status === 200 || user.status === 201){
    return redirect(`dashboard/${user.data?.firstname}${user.data?.lastname}`)
  }
  return redirect('/sign-in')
}

export default Page