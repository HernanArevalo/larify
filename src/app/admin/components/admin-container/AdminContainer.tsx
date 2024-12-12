"use client";

import { larifyStore } from '@/store';
import { Guest } from '@/interfaces';
import { CustomsList, AuthForm } from '../../components';

interface props {
  guests: Guest[];
}

export const AdminContainer = ({ guests }: props) => {
  const { isAdmin } = larifyStore();

  return (
    <div className="admin-container">
    {isAdmin ? <CustomsList guests={guests} /> : <AuthForm />}
  </div>
  )
}
