import {
    Cloud, CreditCard, GaugeCircle, Github, Keyboard, LifeBuoy, ListMinus, LogOut, Mail,
    MessageSquare, PersonStanding, Plus, PlusCircle, Settings, User, UserPlus, Users, Users2
} from 'lucide-react';
import React, { memo, useEffect } from 'react';
import { Link, NavLink, useMatch } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import {
    DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel,
    DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub,
    DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

import logo from '../../../assets/logo.png';
import { cn } from '../../../lib/utils';
import { Skeleton } from '../../ui/skeleton';
import { Tooltip, TooltipContent, TooltipTrigger } from '../../ui/tooltip';

const Li = memo(
  ({
    id,
    title,
    icon,
    link,
    noTooltip = false,
  }: {
    id: number;
    title: string;
    icon?: React.ReactNode;
    link?: string;
    noTooltip?: boolean;
  }) => {
    return (
      <NavLink to={link ?? ""}>
        {({ isActive, isPending, isTransitioning }) => {
          const Component = isPending || isTransitioning ? Skeleton : "li";
          return (
            <Component
              className={cn(
                "flex items-center justify-center cursor-pointer hover:bg-[#f1f1f1] h-[44px] w-[44px]",
                { "border-l-4 border-blue-600 bg-[#f1f1f1]": isActive }
              )}
            >
              <Tooltip>
                <TooltipTrigger>{icon && icon}</TooltipTrigger>
                {!noTooltip && (
                  <TooltipContent>
                    <p>{title}</p>
                  </TooltipContent>
                )}
              </Tooltip>
            </Component>
          );
        }}
      </NavLink>
    );
  }
);

const ProfileIcon = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <div className="h-[30px] w-[30px] bg-gray-50 rounded-full">
        <img
          src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
          className="h-[30px] w-[30px] bg-gray-50 rounded-full"
        />
      </div>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-[300px] ml-[48px] shadow-xl rounded-2xl">
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <User className="w-4 h-4 mr-2" />
          <span>Profile</span>
          <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CreditCard className="w-4 h-4 mr-2" />
          <span>Billing</span>
          <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings className="w-4 h-4 mr-2" />
          <span>Settings</span>
          <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Keyboard className="w-4 h-4 mr-2" />
          <span>Keyboard shortcuts</span>
          <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <Users className="w-4 h-4 mr-2" />
          <span>Team</span>
        </DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <UserPlus className="w-4 h-4 mr-2" />
            <span>Invite users</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItem>
                <Mail className="w-4 h-4 mr-2" />
                <span>Email</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <MessageSquare className="w-4 h-4 mr-2" />
                <span>Message</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <PlusCircle className="w-4 h-4 mr-2" />
                <span>More...</span>
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuItem>
          <Plus className="w-4 h-4 mr-2" />
          <span>New Team</span>
          <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <Github className="w-4 h-4 mr-2" />
        <span>GitHub</span>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <LifeBuoy className="w-4 h-4 mr-2" />
        <span>Support</span>
      </DropdownMenuItem>
      <DropdownMenuItem disabled>
        <Cloud className="w-4 h-4 mr-2" />
        <span>API</span>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <LogOut className="w-4 h-4 mr-2" />
        <span>Log out</span>
        <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

function Sidebar() {
  const options = {
    half1: [
      {
        id: 0,
        icon: <img src={logo} className="h-[26px] w-[28px]" />,
        title: "Medivault",
        link: "/",
      },
      {
        id: 1,
        title: "Dashboard",
        icon: <GaugeCircle size={20} color="#222222" />,
        link: "/",
        isActive: true,
      },
      {
        id: 2,
        title: "Patients",
        icon: <Users2 size={20} color="#222222" />,
        link: "patients/segments/all",
      },
      {
        id: 3,
        title: "Queue",
        icon: <ListMinus size={20} color="#222222" />,
        link: "queue",
      },
    ],
    half2: [
      {
        id: 1,
        title: "Account",
        icon: <ProfileIcon />,
        noTooltip: true,
      },
    ],
  };

  return (
    <div className="w-[44px] bg-[#e8e8e8] fixed top-0 left-0 h-screen z-10 py-3 border-t-4 border-amber-300">
      <div className="flex flex-col items-center justify-between h-full">
        <ul>
          {options.half1.map((option) => (
            <Li key={option.id} {...option} />
          ))}
        </ul>
        <ul>
          {options.half2.map((option) => (
            <Li key={option.id} {...option} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
