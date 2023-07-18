import {Text} from 'react-native'
const RepositoryItem = ({item}) => (<>
  <Text>Full Name: {item.fullName}</Text>
  <Text>Description: {item.description}</Text>
  <Text>Language: {item.language}</Text>
  <Text>Forks Count: {item.forksCount}</Text>
  <Text>Stargazers Count: {item.stargazersCount}</Text>
  <Text>Rating Average: {item.ratingAverage}</Text>
  <Text>Review Count: {item.reviewCount}</Text>
  <Text>Owner Avatar Url: {item.ownerAvatarUrl}</Text>
</>)

export default RepositoryItem