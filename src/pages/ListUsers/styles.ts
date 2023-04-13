/* Aqui utilizei a biblioteca de componentes radix-ui para configurar a utilização da foto dos usuários de maneira mais fácil, 
bem como sigo utilizando o styled-components como framework de estilização CSS-in-JS. */

import { Fallback, Root, Image } from '@radix-ui/react-avatar'
import styled from 'styled-components'

const MainContainer = styled.main`
width: 100%;
max-width: 1120px;
margin: 4rem auto 0;
text-align: center;
h1 {
  color: ${({ theme }) => theme.colors.purple400};
  margin-bottom: 3rem;
}
`

const StyledTable = styled.table`
max-width: 100%;
border-collapse: separate;
border-spacing: 0 0.5rem;
margin: auto;
th,
td {
  padding: 1.25rem 2rem;
  background: ${({ theme }) => theme.colors.gray700};
  &:first-child {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }
  &:last-child {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }
}
  th {
    font-weight: bold;
    padding: 0.75rem;
  }
  button {
    border: none;
    border-radius: 4px;
    padding: 0.375rem 0.75rem;
    background-color: ${({ theme }) => theme.colors.purple400};
    color: ${({ theme }) => theme.colors.white};
    &:hover {
      background-color: ${({ theme }) => theme.colors.purple200} ;
      cursor: pointer;
    }
  }
`
const AvatarImage = styled(Image)`
  border-radius: inherit;
  object-fit: cover;
  height: 100%;
  width: 100%;
`

const AvatarFallback = styled(Fallback)`
  background-color: ${({ theme }) => theme.colors.purple};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  line-height: 1;
  font-weight: 500;
  height: 100%;
  width: 100%;
`
const AvatarRoot = styled(Root)`
  background-color: ${({ theme }) => theme.colors.purple};
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  overflow: hidden;
  user-select: none;
  height: 4rem;
  width: 4rem;
  margin-right: 3rem;
`
export {
  AvatarImage,
  AvatarRoot,
  AvatarFallback,
  StyledTable,
  MainContainer,
}
