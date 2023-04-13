import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: start;
  align-itens: center;
  padding: 1.25rem 0;
  font-size: 1.5rem;
  background: ${({ theme }) => theme.colors.gray800};
`

export const ColabLogo = styled.img`
width: 80px;
height: 53px;
margin-left: 4rem;
`