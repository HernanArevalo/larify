import { AdminContainer } from './components';
import { Guest } from '@/interfaces';
import { getGuests } from '@/service';

import './styles.css';

export default async function AdminPage() {
  const guests: Guest[] = await getGuests();

  return (
    <AdminContainer guests={guests}/>
  );
}
