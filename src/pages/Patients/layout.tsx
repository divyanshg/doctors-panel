import { NavLink, Outlet } from 'react-router-dom';

import { Text } from '@tremor/react';

import { Tooltip, TooltipContent, TooltipTrigger } from '../../components/ui/tooltip';
import { cn } from '../../lib/utils';

const SidebarLink = ({
  to,
  title,
  tooltip,
}: {
  to: string;
  title: string;
  tooltip?: string;
}) => (
  <NavLink to={to}>
    {({ isActive, isPending, isTransitioning }) => (
      <li
        className={cn(
          "py-2 cursor-pointer text-sm px-3 rounded-lg hover:bg-[#e8e8e8]",
          {
            "bg-white hover:bg-white": isActive,
            "animate-pulse": isPending || isTransitioning,
          }
        )}
      >
        <Tooltip>
          <TooltipTrigger>
            <span
              className={cn({
                "font-semibold": isActive,
              })}
            >
              {title}
            </span>
          </TooltipTrigger>
          <TooltipContent>
            <p>{tooltip ?? title}</p>
          </TooltipContent>
        </Tooltip>
      </li>
    )}
  </NavLink>
);

const SideBar = () => {
  return (
    <div className="flex flex-col flex-none h-screen w-[256px] bg-[#f1f1f1] px-4 py-2 border-r border-gray-200 border-t-4 border-t-amber-300">
      <div className="flex flex-row items-center justify-between py-4">
        <Text>
          <span className="text-2xl font-bold text-[#222222]">Patients</span>
        </Text>
      </div>
      <ul>
        <SidebarLink
          to="segments/all"
          title="All"
          tooltip="View all patients"
        />
        <SidebarLink
          to="segments/active"
          title="Active"
          tooltip="View active patients"
        />
        <SidebarLink
          to="segments/new"
          title="New"
          tooltip="View new patients"
        />
      </ul>
    </div>
  );
};

function PatientsLayout() {
  return (
    <div className="flex flex-col flex-auto min-w-0 min-h-0">
      <div className="flex flex-row flex-auto min-h-0">
        <SideBar />
        <div className="flex-1 px-8 py-6 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default PatientsLayout;
