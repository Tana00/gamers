import { useQuery, UseQueryResult } from "react-query";
import { CardItem } from "./CardItem";
import { getFilteredGames } from "../requests/search.request";
import { GameInterface } from "../interface";

export const CardList = () => {
  /** Immediately fetch all games on mount */
  const {
    data: games,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    isLoading: _allGamesLoading,
  }: UseQueryResult<GameInterface[], Error> = useQuery({
    queryKey: ["getFilteredGames"],
    queryFn: () =>
      getFilteredGames({ filterBy: "playtime", query: parseInt("500") }),
    refetchOnWindowFocus: false,
  });

  console.log("games", games);

  return (
    <div className="md:grid lg:grid-cols-4 md:grid-cols-3">
      {games?.map((card: GameInterface) => (
        <CardItem cardData={card} />
      ))}
    </div>
  );
};
