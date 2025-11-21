import { useQuery } from "@tanstack/react-query";
import { supabase } from "../supabase";

const useAboutSection = () => useQuery({
  queryKey: ['aboutPage'],
  queryFn: async () => {
    const { data, error } = await supabase.from('about_page').select('*');

    if (error) throw error;

    return data;
  }
});

export default useAboutSection;