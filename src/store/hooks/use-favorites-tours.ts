// Recoil
import { useRecoilState } from 'recoil';
import { favoritesToursState, toursState } from '../tours';

export const useFavoriteTours = () => {
  const [favoriteTours, setFavoriteTours] = useRecoilState(favoritesToursState);
  const [tours, setTours] = useRecoilState(toursState);

  const addToFavorite = (id: string) => {
    const tour = tours.rockets.find((item) => item.id === id);
    setTours({ rockets: tours.rockets.filter((tour) => tour.id !== id) });
    setFavoriteTours([...favoriteTours, tour]);
  };

  const clearFavorite = () => {
    setFavoriteTours([]);
  };

  const removeFromFavorite = (id: string) => {
    setFavoriteTours(favoriteTours.filter((tour) => tour.id !== id));
  };

  return {
    favoriteTours,
    addToFavorite,
    clearFavorite,
    removeFromFavorite,
  };
};
