import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://tufsolhwmmuserysoqtq.supabase.co";
const supabaseKey = "sb_publishable_5yFtXlafnMPWScrKuQ5QFg_gfJJ3bcw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
