//
// BEGIN
//

import { useQuery } from "@tanstack/react-query";

type Data = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export function usePosts() {
  return useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      const url = "/api/posts";
      const response = await fetch(url);
      const result: Data[] = await response.json();
      return result;
    },
  });
}

//
// END
//
