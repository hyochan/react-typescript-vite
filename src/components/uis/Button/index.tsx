import type {CSSProperties, Component, FC, ReactElement} from 'react';

import ButtonLoading from './ButtonLoading';
import {ButtonPrimary} from '../Styles';
import styled from '@emotion/styled';

const ButtonWrapper = styled.div`
  flex: 1;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const PrimaryText = styled.span`
  font-size: 14px;
  color: ${({theme}) => theme.btnPrimaryFont};
  margin: auto;
`;

const LogoImg = styled.img`
  position: absolute;
  left: 20px;
  height: 20px;
  width: 20px;
  object-fit: cover;
`;

type PropsType<C> = C extends Component<infer P>
  ? P
  : C extends FC<infer P>
  ? P
  : never;

export type ButtonProps = PropsType<typeof Button>;

const Button: FC<{
  testID?: string;
  id?: string;
  style?: CSSProperties;
  imgSrc?: string;
  text?: string | ReactElement;
  onClick?: () => void;
  isLoading?: boolean;
}> = (props) => {
  const {testID, onClick, imgSrc, text, style, isLoading} = props;

  return (
    <ButtonPrimary data-testid={testID} style={style} onClick={onClick}>
      {isLoading ? (
        <ButtonLoading />
      ) : (
        <ButtonWrapper>
          {imgSrc ? <LogoImg src={imgSrc} /> : null}
          <PrimaryText>{text}</PrimaryText>
        </ButtonWrapper>
      )}
    </ButtonPrimary>
  );
};

Button.defaultProps = {
  style: {display: 'flex', height: '60px'},
};

export default Button;
