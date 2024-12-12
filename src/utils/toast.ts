import Swal, { SweetAlertIcon } from 'sweetalert2'

interface toastInterface {
  icon?: SweetAlertIcon,
  title: string|undefined, 
  background?: string|undefined,
  color?: string|undefined,
}
export const Toast = ({
  icon="success",
  title='', 
  background='rgb(250, 250, 250)',
  color='rgb(52, 24, 71)'
}:toastInterface) => {

 
  Swal.fire({
    position: "center",
    icon: icon,
    title: title,
    showConfirmButton: false,
    timer: 3000,
    background: background,
    color: color
    
  });
}