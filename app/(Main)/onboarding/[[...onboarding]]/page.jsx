'use client'
import { OrganizationList, useOrganization } from '@clerk/nextjs'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
const page = () => {
    const {organization} = useOrganization();
    const router = useRouter();


    useEffect(() => {
        if(organization){
            router.push(`/organization/${organization?.slug}`)
        }
    },[organization])
    
  return (
    <div className='grid place-items-center min-h-screen'>
        <OrganizationList hidePersonal
        afterCreateOrganizationUrl={"/organization/:slug"}
        afterSelectOrganizationUrl={"/organization/:slug"}
        />
    </div>
  )
}

export default page