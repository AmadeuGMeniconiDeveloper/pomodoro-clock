import styled from "styled-components";

export const HistoryContainer = styled.main`
  height: 100%;

  display: flex;
  flex-direction: column;

  padding: 3.5rem;

  & > h1 {
    color: ${props => props.theme.colors.base.grey_700};
    font-size: ${props => props.theme.commons.font.size.xl};
    font-weight: ${props => props.theme.commons.font.weight.bold};
    line-height: ${props => props.theme.commons.font.lineHeight.default};
  }
`;

export const HistoryListContainer = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;

  table {
    width: 100%;
    min-width: 600px;
    border-collapse: collapse;

    th {
      padding: 1rem;

      background-color: ${props => props.theme.colors.base.gray_400};

      text-align: left;

      color: ${props => props.theme.colors.base.grey_700};
      font-size: ${props => props.theme.commons.font.size.sm};
      font-weight: ${props => props.theme.commons.font.weight.bold};
      line-height: ${props => props.theme.commons.font.lineHeight.default};

      &:first-child {
        border-top-left-radius: ${props => props.theme.commons.radius.md};
        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: ${props => props.theme.commons.radius.md};
        padding-left: 1.5rem;
      }
    }

    tbody {
      tr {
        td {
          padding: 1rem;

          border-top: 4px solid ${props => props.theme.colors.base.gray_200};
          background-color: ${props => props.theme.colors.base.gray_300};

          font-size: ${props => props.theme.commons.font.size.sm};
          line-height: ${props => props.theme.commons.font.lineHeight.default};

          &:first-child {
            width: 50%;
            padding-left: 1.5rem;
          }

          &:last-child {
            padding-left: 1.5rem;
          }
        }
      }
    }
  }
`;

interface StatusProps {
  statusColor: "yellow" | "green" | "red";
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.commons.spacing.sm};

  &::before {
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    border-radius: ${props => props.theme.commons.radius.full};
    background-color: ${props => props.theme.colors.tints[props.statusColor]};
  }
`;
