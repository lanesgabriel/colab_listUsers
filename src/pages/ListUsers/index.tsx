import {  MainContainer, StyledTable, AvatarImage, AvatarRoot } from "./styles"
import { useGetUsersQuery } from "../../store/services/randomUserApi"
import { dateFormatter} from '../../utils/formatter'

export function ListUsers(): JSX.Element {
  /* Esta primeira variável é a responsável por resgatar os usuários, neste caso estou pedindo a listagem de 10 deles, 
  bem como seto as respostas dos reducers de loading e error */
  const { 
    data: users,
    isLoading, 
    isError,
  } = useGetUsersQuery(10)

  const userList = users?.results ?? []

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>An error occurred</div>

  return (
    <>
      <MainContainer>
      <h1>User Listing</h1>
        <StyledTable>
        
          <thead>
            <tr>
              <th>User</th>
              <th>Birthday</th>
              <th>Adress</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
          {userList.map((user) => (
            <tr key={user.login.uuid}>
              <td style={{ display: 'flex', alignItems: 'center' }}>
              <AvatarRoot>
                <AvatarImage
                  src={user.picture.thumbnail}
                  alt={`${user.name.first} ${user.name.last}`}
                />
              </AvatarRoot>
              {user.name.first} {user.name.last}
              </td>
              <td> {dateFormatter.format(new Date(user.dob.date))}</td>
              <td>{user.location.street.number} {user.location.street.name}</td>
              <td>{user.phone}</td>
            </tr>
            ))}
          </tbody>
        </StyledTable>
      </MainContainer>
    </>
  )
}