import { GaugeCircle, ListMinus, PersonStanding } from 'lucide-react';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const Li = memo(
  ({
    id,
    title,
    icon,
    link,
  }: {
    id: number;
    title: string;
    icon?: React.ReactNode;
    link: string;
  }) => (
    <Link to={link}>
      <li className="flex items-center px-3 py-2 mb-2 space-x-2 text-gray-300 rounded-lg cursor-pointer hover:bg-gray-700">
        {icon && icon}
        <span>{title}</span>
      </li>
    </Link>
  )
);

function Sidebar() {
  const options = [
    {
      id: 1,
      title: "Dashboard",
      icon: <GaugeCircle size={20} />,
      link: "/",
    },
    {
      id: 2,
      title: "Patients",
      icon: <PersonStanding size={20} />,
      link: "/patients",
    },
    {
      id: 3,
      title: "Queue",
      icon: <ListMinus size={20} />,
      link: "/queue",
    },
  ];

  return (
    <div className="w-[300px] bg-gray-900 border-r border-gray-900 shadow-xl p-4 fixed top-0 left-0 h-screen z-10">
      <ul>
        {options.map((option) => (
          <Li key={option.id} {...option} />
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
