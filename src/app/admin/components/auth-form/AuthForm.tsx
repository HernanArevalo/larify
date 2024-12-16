'use client'
import { larifyStore } from '@/store';
import { useState } from 'react'

export const AuthForm = () => {
  const [password, setPassword] = useState<string>('');

  const { setAdmin } = larifyStore()

  const checkPassword = () => {
    if ((password.trim().toLowerCase() == 'larucha') || (password.trim().toLowerCase() == '7')) {
      setAdmin(true)
    }
  }

  return (
    <form onSubmit={checkPassword} className="check-form">
              <label>Ingrese la contraseña:</label>
              <input type="password" value={password} onChange={e => { setPassword(e.target.value) }} />
              <button type='submit'>Ingresar</button>
            </form>
  )
}
