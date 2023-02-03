import ProfileMenu from '../../components/ProfileMenu';
import { HeaderLogo, Header, ThemeButton, LoginWrap } from './styles';
import { useViewPort } from '@hooks/useViewPort';
import { useGetClientUser } from '@hooks/userInfo';
import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsFillSunFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const { userName, userAvatar } = useGetClientUser();
  const { innerWidth } = useViewPort();

  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const onMouseOverProfile = () => {
    setProfileMenuOpen(true);
  };

  const onMouseOutProfile = () => {
    setProfileMenuOpen(false);
  };

  const onTouchStartProfile = () => {
    setProfileMenuOpen(true);
  };

  return (
    <>
      <Header>
        <HeaderLogo>
          <Link to='/'>
            <img
              src='https://www.sentenceu.co.kr/src/assets/images/logo_empty.png'
              alt='센텐스유 로고'
            />
          </Link>
        </HeaderLogo>
        <ThemeButton>
          <BsFillSunFill />
        </ThemeButton>
        <LoginWrap
          onTouchStart={onTouchStartProfile}
          onMouseOver={onMouseOverProfile}
          onMouseOut={onMouseOutProfile}>
          {!userName ? (
            innerWidth > 360 ? (
              <>Let&apos;s get started.</>
            ) : (
              <>
                <AiOutlineMenu />
                &nbsp;&nbsp;MENU
              </>
            )
          ) : (
            <Link>
              <img alt={userName} src={userAvatar} />
              <span>{userName}</span>
            </Link>
          )}
          {userName && userAvatar ? (
            <ProfileMenu
              isOpened={profileMenuOpen}
              onMouseOver={onMouseOverProfile}
              onMouseOut={onMouseOutProfile}
            />
          ) : (
            <ProfileMenu
              isOpened={profileMenuOpen}
              onMouseOver={onMouseOverProfile}
              onMouseOut={onMouseOutProfile}
            />
          )}
        </LoginWrap>
      </Header>
    </>
  );
};

export default NavBar;
