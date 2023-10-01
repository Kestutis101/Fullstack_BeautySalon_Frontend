import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { StyledDiv, StyledImg } from "./Header.styled";
import logoImage from "../../../../assets/logo_image.png";

export default function Header() {
  const [jwtToken, setJwtToken] = useState(localStorage.getItem("jwtToken"));

  useEffect(() => {
    const storedToken = localStorage.getItem("jwtToken");
    setJwtToken(storedToken);
  }, [localStorage.getItem("jwtToken")]);

  function handleLogout() {
    localStorage.removeItem("jwtToken");
    window.alert("You have successfully logged out");
    window.location.reload();
  }

  const menuItems = useMemo(() => {
    const showLogOut = Boolean(jwtToken);
    const showLogIn = !showLogOut;
    const showCreateClient = showLogOut;
    const showClients = showLogOut;
    const showRegister = !Boolean(jwtToken);

    return {
      showLogOut,
      showLogIn,
      showCreateClient,
      showClients,
      showRegister,
    };
  }, [jwtToken]);

  return (
    <>
      <StyledDiv>
        <div>
          <StyledImg src={logoImage} alt='logo' />
          <p>Beauty Salon</p>
        </div>
        <nav>
          <Link to='/'>Main Page</Link>
          {menuItems.showCreateClient && (
            <Link to='/createClient'>Create client</Link>
          )}
          {menuItems.showClients && <Link to='/clients'>Clients</Link>}
          {menuItems.showLogIn && <Link to='/login'>Log In</Link>}
          {menuItems.showLogOut && (
            <Link to='/' onClick={handleLogout}>
              Log Out
            </Link>
          )}
          {menuItems.showRegister && <Link to='/signUp'>Register</Link>}
        </nav>
      </StyledDiv>
    </>
  );
}
