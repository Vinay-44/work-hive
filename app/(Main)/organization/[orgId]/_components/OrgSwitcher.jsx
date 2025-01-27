'use client'
import { OrganizationSwitcher, SignedIn, useAuth, useOrganization, useUser } from '@clerk/nextjs'
import { usePathname } from 'next/navigation';
import React from 'react'

const OrgSwitcher = () => {
    const {isLoaded} = useOrganization();
    const {isLoaded:isUserLoaded} = useUser();

    if(!isLoaded || !isUserLoaded){
        return null;
    }
    const pathName  = usePathname();
  return (
    <div>
       <SignedIn>
        <OrganizationSwitcher
            createOrganizationUrl="/onboarding"
            hidePersonal={true}
            createOrganizationMode={
                pathName === "/onboarding" ? "navigation" : "modal"
            }
            afterSelectOrganizationUrl={"/organization/:slug"}
            afterCreateOrganizationUrl={"/organization/:slug"}
            appearance={{
                elements:{
                    organizationSwitcherTrigger:"border border-gray-300 rounded-md p-4 text-white hover:text-gray-300",
                    organizationSwitcherTriggerIcon:'text-white',
                }
            }}
        />
       </SignedIn>
    </div>
  )
}

export default OrgSwitcher