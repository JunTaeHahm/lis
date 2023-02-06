import { Container, ListWrap, List, Title, Online } from './styles';
import { useSocket } from '@hooks/useSocket';
import { useViewPort } from '@hooks/useViewPort';
import { useAllUsers, useGetClientUser } from '@hooks/userInfo';
// import { useAllUsers } from '@hooks/userInfo';
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const UserLists = ({ userListOpen, setUserListOpen }) => {
  const ref = useRef();

  const { allUsers } = useAllUsers();
  const { userName } = useGetClientUser();
  const { onlineList } = useSocket(userName);
  const { innerWidth } = useViewPort();

  /* 온라인 유저가 맨 위에 위치하도록 배열 순서 바꾸기 */
  let onlineUsers = [];
  let offlineUsers = [];
  allUsers.forEach((user, i) => {
    if (onlineList.indexOf(user) !== -1) {
      onlineUsers?.push(user); // 온라인 리스트에 있는 유저명일 경우 onlineUsers 배열에 추가
    } else {
      offlineUsers?.push(user); // 없으면 offlineUsers 배열에 추가
    }
  });

  // 온라인, 오프라인 순서의 배열 생성. '센텐스유'라는 유저명은 제외(공식계정)
  const sortedUsers = [...onlineUsers, ...offlineUsers.sort()].filter((v) => v !== '센텐스유');

  /* useClickOutsideModal Hooks 함수 (모바일에서만 작동하도록) */
  useEffect(() => {
    const listener = (e) => {
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }
      innerWidth < 768 && setUserListOpen(false);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, setUserListOpen, innerWidth]);

  return (
    <Container userListOpen={userListOpen}>
      <Title>유저목록</Title>

      <ListWrap ref={ref}>
        {sortedUsers.map((user, i) => {
          // 온라인 일 경우 isOnline !== -1
          const isOnline = onlineList.indexOf(user);
          return (
            <List className={isOnline < 0 ? 'offline' : 'online'} key={i}>
              <Link to={`/${user}`}>{user}</Link>
            </List>
          );
        })}
      </ListWrap>
      
      <Online>접속 중</Online>
    </Container>
  );
};

export default UserLists;
