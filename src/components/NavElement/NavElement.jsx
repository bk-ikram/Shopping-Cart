import { NavLink } from 'react-router-dom';

export default function NavElement({path,children,style=true}){
    return(
        <NavLink 
            to={path}
            className={({ isActive, isPending }) =>
                      style && isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
            }
        >
            {children}
        </NavLink>
    )
}