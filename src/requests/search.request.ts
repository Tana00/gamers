import { searchService } from "../services/apiservice";
import { _create_UUID } from "../utils";

/** Get all games. The React-Query key is "getFilteredGames" */
export const getFilteredGames = async ({
  query,
  filterBy,
}: {
  filterBy: string;
  query: number;
}) => {
  const res = await searchService(_create_UUID()).get(`?${filterBy}=${query}`);
  return res;
};
