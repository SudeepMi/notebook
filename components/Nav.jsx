import { useState, useEffect } from 'react';

import { NavLink } from '.';
import { userService } from 'services';

export { Nav };

function Nav() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const subscription = userService.user.subscribe(x => setUser(x));
        return () => subscription.unsubscribe();
    }, []);

    function logout() {
        userService.logout();
    }

    // only show nav when logged in
    if (!user) return null;
    
    return (
        <nav className="navbar navbar-expand navbar-light bg-brand border-bottom">
            <div className="navbar-nav align-items-center">
                <NavLink href="/"  className="nav-item nav-link navbar-brand flex-1 mr-5">
                    NOTEBOOK
                </NavLink>
                <NavLink href="/" exact className="nav-item nav-link">Home</NavLink>
                <NavLink href="/authors" className="nav-item nav-link">Author</NavLink>
                <NavLink href="/posts" className="nav-item nav-link">Posts</NavLink>
                <a onClick={logout} className="nav-item nav-link">Logout</a>
            </div>
        </nav>
    );
}