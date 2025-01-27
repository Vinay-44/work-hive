"use client";
import { useOrganization, useUser } from '@clerk/nextjs';
import React, { useEffect, useState } from 'react'
import OrgSwitcher from '../../organization/[orgId]/_components/OrgSwitcher';
import { useForm } from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import { projectSchema } from '@/lib/validation';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useGetData } from '@/custom-hooks/useGetData';
import { createProject } from '@/actions/project';
const page = () => {
    const {isLoaded:isOrgLoaded,membership} = useOrganization();
    const {isLoaded:isUserLoaded} = useUser();

    const [isAdmin,setIsAdmin] = useState(false);

    const {register,handleSubmit,formState:{errors}} = useForm({
        resolver: zodResolver(projectSchema),

    })

    const onSubmit=async (data) => {
       
    }
    console.log(errors);
    


    useEffect(()=>{
        if(isOrgLoaded && isUserLoaded && membership){
            setIsAdmin(membership.role === "org:admin")
        }
    },[isOrgLoaded,isUserLoaded,membership])

    if(!isOrgLoaded || !isUserLoaded){
        return null;
    }
    if(!isAdmin){
        return <div className='flex flex-col gap-2 items-center'>
            <span className='text-5xl gradient-title'>You are not authorized to create project
            </span>
            <OrgSwitcher/> 
        </div>
    }

    const {data:project,loading,error,fn:createProjectFn}  = useGetData(createProject())
  return (
    <div className='container mx-auto py-10'>
        <h1 className='text-6xl text-center font-bold mb-8 gradient-title'>Create New Project</h1>

        <form className='flex flex-col space-y-4' onSubmit={handleSubmit(onSubmit)}>
            <div>
            <Input id="name" className="bg-slate-950" placeholder="Project Name" 
            {...register('name')}
            />
            {errors.name && (
                <span className='text-red-500 text-sm mt-1'>{errors.name.message}</span>
            )}
            </div>
            <div>
            <Input id="key" className="bg-slate-950" placeholder="Enter Key..." 
            {...register('key')}
            />
            {errors.key && (
                <span className='text-red-500 text-sm mt-1'>{errors.key.message}</span>
            )}
            </div>
            <div>
            <Textarea id="description" className="bg-slate-950 h-28" placeholder="Project Description" 
            {...register('description')}
            />
            {errors.description && (
                <span className='text-red-500 text-sm mt-1'>{errors.description.message}</span>
            )}
            </div> 
            <Button type="submit" size="lg" className="bg-blue-500 text-white hover:bg-blue-600 rounded-md">Create Project</Button>
        </form>
    </div>
  )
}

export default page