import React from "react";
import { useQuery } from "react-query";

const useEventlist = () => {
  const { data, isLoading, isError, refetch } = useQuery(
    "allEventlist",
    getAllEventlist,
    { refetchOnWindowFocus: false }
  );

  return {
    data,
    isError,
    isLoading,
    refetch,
  };
};

export default useEventlist;
