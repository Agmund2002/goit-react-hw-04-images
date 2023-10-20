import styled from 'styled-components';
import { Field, Form, ErrorMessage } from 'formik';
import { BiSearchAlt } from 'react-icons/bi';

export const Header = styled.header`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${p => p.theme.colors.mainBg};
`;

export const FormStyled = styled(Form)`
  width: 50%;
  min-width: 170px;
  display: flex;
  align-items: center;
  gap: ${p => p.theme.spacing(1)};
  position: relative;
`;

export const Input = styled(Field)`
  width: 100%;
  height: 25px;
  border-radius: 5px;
  overflow: hidden;
  font-size: 15px;

  padding-left: 25px;
`;

export const SubmitBtn = styled.button`
  position: absolute;
  left: 2px;
  width: 22px;
  height: 22px;
  border-radius: 5px 0px 0px 5px;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  transition: background-color ${p => p.theme.animation};

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.accent};
  }
`;

export const Icon = styled(BiSearchAlt)`
  width: 18px;
  height: 18px;
`;

export const Error = styled(ErrorMessage)`
  position: absolute;
  right: 5px;
  color: ${p => p.theme.colors.error};
  font-size: 14px;
`;


