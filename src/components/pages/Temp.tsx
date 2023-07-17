import type {ReactElement} from 'react';
import {useNavigate} from 'react-router-dom';
import styled from '@emotion/styled';

import Button from '../uis/Button';

const Container = styled.div`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.background};
  padding: 50px;
`;

function Temp(): ReactElement {
  const navigate = useNavigate();

  return (
    <Container>
      <Button onClick={(): void => navigate(-1)} text="back to tab page" />
    </Container>
  );
}

export default Temp;
