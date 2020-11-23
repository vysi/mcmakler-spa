import React from "react";
import "./Menu.scss";
import { ReactComponent as MenuBurger } from "../../assets/svg/menu.svg";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";
import { ReactComponent as Message } from "../../assets/svg/message.svg";
import { ReactComponent as Headphones } from "../../assets/svg/headphones.svg";
import { ReactComponent as UserIcon } from "../../assets/svg/user.svg";
import { ReactComponent as Power } from "../../assets/svg/power-icon.svg";

const Menu = () => {
  return (
    <div>
      <div className="menu">
        <div id="mobile">
          <MenuBurger width="30" height="30" />
          <Logo />
          <Message width="30" height="30" />
        </div>

        <div id="web">
          <div className="menu-logo">
            <span>
              <MenuBurger width="20" height="20" />
            </span>
            <span>
              <Logo width="140" height="22" />
            </span>
          </div>
          <div className="menu-actions">
            <span>
              <Headphones />
            </span>
            <b>
              <span>Contact Support</span>
            </b>

            <span>
              <Message />
            </span>
            <span>
              <UserIcon />
            </span>
            <span>
              <Power />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
