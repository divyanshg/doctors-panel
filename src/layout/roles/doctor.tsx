import React from 'react';

import Sidebar from '@/components/Doctor/Sidebar';
import { useAuth } from '@/stores/auth';

import Topbar from '../../components/Topbar';

function Doctor({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();

  if (user?.role == "DOCTOR") {
    return (
      <main className="flex flex-row justify-start min-h-screen">
        <Sidebar />
        <div className="flex-col flex-1 bg-red-400">
          {/* <Topbar /> */}
          <div className="absolute min-h-screen bg-white left-[44px] w-[97.7%]">
            {children}
          </div>
        </div>
      </main>
    );
  }
}

export default Doctor;
