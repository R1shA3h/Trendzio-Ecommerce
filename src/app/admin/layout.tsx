"use client"
import Loader from '@/components/admin-panel/Loader';
import Login from '@/components/admin-panel/Login';
import Sidebar from '@/components/admin-panel/Sidebar';
import { useAppSelector } from '@/redux/hooks'
import { useSession } from 'next-auth/react';
import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {

    const isLoading = useAppSelector(store => store.LoadingReducer);
    const {data:session } = useSession();

    if(!session?.user){
        return <Login/>;
    }

  return (
    <div className='flex'>
      <Sidebar/>
      <div className="w-full h-full">
        <div className="bg-gray-200 p-4 h-[calc(100vh-64vh)]">{children}</div>
      </div>
      {isLoading && <Loader/>}
    </div>
  )
}

export default layout
