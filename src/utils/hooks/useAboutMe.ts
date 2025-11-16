import { useQuery } from "@tanstack/react-query";
import { supabase } from "../supabase";

const useAboutMe = () => useQuery({
  queryKey: ['aboutMe'],
  queryFn: async () => {
    const { data, error } = await supabase.from('about_sections').select("*").single();

    if (error) throw error;

    return data;
  }
});

export default useAboutMe;