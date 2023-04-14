// GraphQl
import { useQuery } from '@apollo/client';
import { GET_ROCKETS } from '../../graphql/queries';
// Components
import { Background } from './components';
// Styled
import { Container } from './home.styled';
// Assets
import { Satellite } from '../../assets/svg';

const Home: React.FC = () => {
  const { loading, error, data } = useQuery(GET_ROCKETS);

  return (
    <>
      <Background />
      <Container></Container>
    </>
  );
};

export default Home;
