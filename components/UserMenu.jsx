"use client";
import React from 'react'
import { UserButton } from '@clerk/nextjs'
import { ChartNoAxesGantt } from 'lucide-react'
const UserMenu = () => {
  return (
        <UserButton 
        appearance={{
            elements:{
                avatarBox:'w-10 h-10 rounded-full',
            }
        }}>
            <UserButton.MenuItems>
                <UserButton.Link
                    label='My Organization'
                    href='/onboarding'
                    labelIcon={<ChartNoAxesGantt size={20}/>}
                />

            </UserButton.MenuItems>
        </UserButton>
  )
}

export default UserMenu