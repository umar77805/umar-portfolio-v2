import { useQuery } from "@tanstack/react-query";
import { supabase } from "../supabase";

const useGlobal = () => useQuery({
  queryKey: ['global'],
  queryFn: async () => {
    const { data, error } = await supabase.from('globals').select(`*, sections (*), contact (*)`).single();

    if (error) throw error;

    return data;
  }
});

export default useGlobal;