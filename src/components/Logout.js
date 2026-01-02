import React from "react";  
import { useOut } from "./out";

function LogOutPage() {
    const out = useOut();

    const logout = (e) =>{
        e.preventDefault();
        out.logout(`sesion cerrada`);
    }
  return(
    <>
   <h1>LogOut Page</h1>

   <form onSubmit={logout}> 
    <label>Cerrar sesion: </label>
    <button type="submit">Salir</button>
   </form>
    </>
  )
}
export {LogOutPage};