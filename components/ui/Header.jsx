import {
    SignedIn,
    SignedOut,
    SignInButton
} from '@clerk/nextjs'
import Link from 'next/link'
import { Button } from './button'
import { PenBox } from 'lucide-react'
import UserMenu from '../UserMenu'
import { checkUser } from '@/lib/DbFuncs/checkUser'
import UserLoading from '../user-loading'
const Header = async() => {
    const user = await checkUser()
    console.log(user);
    
  return (
    <header className='container mx-auto'>
        <nav className='py-4 px-4 flex items-center justify-between'>
            <Link  href={"/"}>
                <p className='text-2xl font-bold'><span className='text-blue-400'>Work</span> Hive</p>
            </Link>

        <div className='flex items-center gap-4'>
        <Link  href={"/project/create"}>
            <Button variant="secondary">
                <PenBox/>
                <span>Create Project</span>
            </Button>
        </Link>
        <SignedIn>
           <UserMenu/>
        </SignedIn>
        <SignedOut>
            <SignInButton forceRedirectUrl='/onboarding'>
                <Button variant="outline">Sign In</Button>
            </SignInButton>
        </SignedOut>
        </div>
        </nav>
        <UserLoading/>
    </header>
  )
}

export default Header