import { useQuery } from "@tanstack/react-query";
import { supabase } from "../supabase";

const useExperiences = () => useQuery({
  queryKey: ['experiences'],
  queryFn: async () => {
    const { data, error } = await supabase.from('experience').select('*');

    if (error) throw error;

    return data;
  }
});

export default useExperiences;