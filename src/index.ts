import { useQuery } from "@apollo/client";
import { useGamesQuery } from "./gql/generated/graphql";

const Games = () => {
  const { data } = useGamesQuery();
};
