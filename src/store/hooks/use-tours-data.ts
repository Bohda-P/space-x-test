// GraphQl
import { useQuery } from '@apollo/client';
import { GET_ROCKETS } from '../../graphql/queries';
// Recoil
import { useRecoilState } from 'recoil';
import { toursState } from '../tours';
import { useEffect } from 'react';

export const useToursData = () => {
  const { loading, error, data } = useQuery(GET_ROCKETS);
  const [tours, setTours] = useRecoilState(toursState);

  useEffect(() => {
    if (!loading && !!data) {
      setTours(data);
    }
  }, [loading]);

  return {
    tours,
    error,
    loading,
  };
};
