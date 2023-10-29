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
        <div className="flex-col flex-1 bg-gray-900">
          <Topbar />
          <div className="absolute min-h-screen px-6 py-4 rounded-t-lg bg-slate-100 top-16 left-[300px] w-[84.215%]">
            {children}
          </div>
        </div>
      </main>
    );
  }
}

export default Doctor;
