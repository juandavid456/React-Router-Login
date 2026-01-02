import React from "react";
import { Link,NavLink} from "react-router-dom";
import { useOut } from "./out";
import styles from "../Modules.css/Menu.module.css";

export function Menu() {
  const out = useOut();
  
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        {routes.map(route => {
          if (route.publiconly && out.user) return null;
          if (route.private && !out.user) return null;

          return (
            <li key={route.to}>
              <NavLink 
                className={styles.link}
                style={({isActive}) => ({
                  borderBottom: isActive ? '2px solid #61dafb' : 'none',
                  color: isActive ? 'white' : ''
                })}
                to={route.to}
              >
                {route.text}
              </NavLink>
            </li>
          );
        })} 
      </ul>
    </nav>
  );
}

const routes = [];
routes.push({
  to:'/',text:'Home'
});
routes.push({
  to:'/about',
  text:'About',
  private:false,
});  
  
routes.push({
  to:'/profile',
  text:'Profile',
  private:true,
  
});
routes.push({
  to:'/blog',
  text:'Blog',
  private:false,
  
});
routes.push({
  to:'/login',
  text:'Login',
  publiconly: true,
  
});
routes.push({
  to:'/logout',
  text:'Logout',
  private:true,
  
});
