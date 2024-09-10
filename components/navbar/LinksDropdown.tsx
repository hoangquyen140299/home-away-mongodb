import { LuAlignLeft } from 'react-icons/lu';
import { Button } from '../ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import UserIcon from './UserIcon';
import { links } from '@/utils/links';
import Link from 'next/link';

function LinksDropdown() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='outline' className='flex gap-4 max-w-[100px]'>
                    <LuAlignLeft className='w-6 h-6' />
                    <UserIcon />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-52' align='start' sideOffset={10}>
                {links.map((link) => {
                    return (
                        <DropdownMenuItem
                            key={link.href}
                            className='capitalize w-full'
                        >
                            <Link href={link.href}>{link.label}</Link>
                        </DropdownMenuItem>
                    );
                })}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
export default LinksDropdown;
