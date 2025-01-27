import { getOrganization } from '@/actions/organization'
import React from 'react'
import OrgSwitcher from './_components/OrgSwitcher';

const OrganizationPage = async({params}) => {
  const {orgId} = params
  
  const org = await getOrganization(orgId);
  console.log(org);
  
  if(!org){
      return <div>Organization not found</div>
  }
  return (
    <div className='container mx-auto mt-5'>
      <div className='mb-4 flex flex-col sm:flex-row items-start justify-between'>
        <h1 className='text-5xl font-bold gradient-title pb-2'>{org.name}'s Projects</h1>
        <OrgSwitcher/>
      </div>
    </div>
  )
}

export default OrganizationPage