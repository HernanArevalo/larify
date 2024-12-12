"use client";

import { larifyStore } from '@/store';
import './styles.css'
import { CustomsList, AuthForm } from './components';
import { Guest } from '@/interfaces';

interface props{
  guests: Guest[]
}

export default function AdminPage({guests}:props) {
  const { isAdmin } = larifyStore()

  return (
    <div className="admin-container">
      {
        isAdmin ?
          ( <CustomsList guests={guests}/> )
          :
          ( <AuthForm />
          )
      }
    </div>
  );
}