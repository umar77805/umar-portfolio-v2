import { useQuery } from "@tanstack/react-query";
import { supabase } from "../supabase";

const useQuote = () => useQuery({
  queryKey: ['quote'],
  queryFn: async () => {
    const { data, error } = await supabase.from('quote').select('*').single();

    if (error) throw error;

    return data;
  }
})

export default useQuote;