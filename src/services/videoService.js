import { createClient } from "@supabase/supabase-js";

const supaBaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supaBaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supaBaseUrl, supaBaseKey);

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                .select("*");
        },
        getPlaylistNames(){
            return supabase.from("playlists")
                .select("name");
        }
    }
}