import * as React from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

const Container = styled.div`
  font-size: 16px;
  display: flex;
  align-items: center;
`;

const Notification = ({ message }) => (
  <div name={console.log({message})}>
    {message && (
      <Container>
        <span style={{textTransform: 'initial' }}>{message}</span>
      </Container>
    )}
  </div>
);

export default function({ message, type }) {
  toast(<Notification message={message} />, { type });
}

