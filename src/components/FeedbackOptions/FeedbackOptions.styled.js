import styled from '@emotion/styled';

export const FeedbackButton = styled.button`
  padding: 5px;
  margin: 5px;
  min-width: 80px;
  border: none;
  outline: none;
  border-radius: 10px;
  color: #212121;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.39;
  letter-spacing: 0.03em;
  text-align: center;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  &:hover {
    box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);
    background-color: #d4bdd6;
  }
`;
