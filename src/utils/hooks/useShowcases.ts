import { useQuery } from "@tanstack/react-query";
import { supabase } from "../supabase";

const useShowcases = () => useQuery({
  queryKey: ['showcases'],
  queryFn: async () => {
    const { data, error } = await supabase.from('projects').select('*');

    if (error) throw error;

    return data;
  }
});

export default useShowcases;