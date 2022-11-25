import Button from '../uis/Button';
import type {FC} from 'react';
import {IC_GOOGLE_W} from '../../utils/Icons';
import type {User} from '../../types';
import UserCard from '../uis/UserCard';
import {device} from '../../theme';
import styled from '@emotion/styled';
import {useNavigate} from 'react-router-dom';
import {useRecoilState} from 'recoil';
import {useState} from 'react';
import {useThemeContext} from '../../providers/ThemeProvider';
import {useTranslation} from 'react-i18next';
import {userRecoilState} from '../../recoil/atoms';

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  align-self: stretch;
  overflow: scroll;
  background: ${(props) => props.theme.background};

  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  flex-direction: column;

  @media ${device.mobileS} {
    bottom: 40px;
    width: 85vw;
    align-self: center;
  }

  @media ${device.tablet} {
    width: 50vw;
    right: 60px;
    align-self: center;
    top: 400px;
  }
`;

const Intro: FC = () => {
  // eslint-disable-next-line
  let timer: any;
  const navigate = useNavigate();
  const [_, setUser] = useRecoilState(userRecoilState);
  const {changeThemeType} = useThemeContext();
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const {t} = useTranslation();

  const onLogin = (): void => {
    setIsLoggingIn(true);

    setUser(null);

    timer = setTimeout(() => {
      const newUser: User = {
        displayName: 'Hyo',
        age: 35,
        job: 'developer',
      };

      setUser(newUser);
      setIsLoggingIn(false);
      clearTimeout(timer);
    }, 1000);
  };

  return (
    <Container>
      <UserCard />
      <ButtonWrapper>
        <Button
          testID="SIGN_IN"
          imgSrc={IC_GOOGLE_W}
          isLoading={isLoggingIn}
          onClick={onLogin}
          text={t('sign_in')}
        />
        <Button onClick={() => navigate('/temp', {})} text={t('navigate')} />
        <Button
          testID="CHANGE_THEME"
          onClick={() => changeThemeType()}
          text={t('change_theme')}
        />
      </ButtonWrapper>
    </Container>
  );
};

export default Intro;
