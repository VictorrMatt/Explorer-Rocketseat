import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  border-radius: 10px;
  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.BACKGROUND_700};
  color: ${({ theme, isNew }) => (isNew ? theme.GRAY_200 : theme.COLORS.WHITE)};
  border: ${({ theme, isNew }) =>
    isNew ? `2px dashed ${theme.COLORS.GRAY_200}` : "none"};

  > svg {
    color: ${({ theme }) => theme.COLORS.PINK};
    width: 22px;
    height: 24px;
  }
`;
