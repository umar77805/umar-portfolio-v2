import { useQuery } from "@tanstack/react-query";
import { supabase } from "../supabase";

const useHero = () => useQuery({
  queryKey: ['hero'],
  queryFn: async () => {
    const { data, error } = await supabase.from('hero').select("*").single();

    if (error) throw error;

    return data;
  }
})

export default useHero;