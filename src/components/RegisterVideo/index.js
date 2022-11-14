import React, {useEffect, useState} from "react";
import { StyledRegisterVideo } from "./styles";
import { createClient } from "@supabase/supabase-js";
import { videoService } from "../../services/videoService";


const supaBaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supaBaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supaBaseUrl, supaBaseKey);
const service = videoService()

function getThumbnail(url){
    let result

    if (result = url.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/)) {
        return `https://img.youtube.com/vi/${result.pop()}/hqdefault.jpg`;
    }
    else if (result = url.match(/youtu.be\/(.{11})/)) {
        return `https://img.youtube.com/vi/${result.pop()}/hqdefault.jpg`;
    }
}

function useForm(propsDoForm) {
    const [values, setValues] = useState(propsDoForm.initialValues);

    return {
        values,
        handleChange: (evento) => {
            const value = evento.target.value;
            const name = evento.target.name;
          
            setValues({
                ...values,
                [name]: value,
            });
        },
        clearForm() {
            setValues({});
        }
    };
}

export const RegisterVideo = (props) => {
  
    const playlistName = props.playlistNames
    const playlists = []

    Object.values(playlistName).forEach(val => playlists.push(val.name))

    const formCadastro = useForm({
        initialValues: { titulo: "", url: "",}
    });
    const [formVisivel, setFormVisivel] = useState(false);
  
    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => setFormVisivel(true)}>
                ➕
            </button>
            {formVisivel
                ? (
                    <form onSubmit={(event) => {
                        event.preventDefault();
                        console.log(formCadastro.values.playlist);

                        supabase.from("video").insert({
                            title: formCadastro.values.titulo,
                            url: formCadastro.values.url,
                            thumb: getThumbnail(formCadastro.values.url),
                            playlist: formCadastro.values.playlist
                        })
                        .then((data)=>{
                            console.log(data)
                        })
                        setFormVisivel(false);
                        formCadastro.clearForm();
                    }}>
                        <div>
                            <button type="button" className="close-modal" onClick={() => setFormVisivel(false)}>
                                ❌
                            </button>
                            <input
                                placeholder="Titulo do vídeo"
                                name="titulo"
                                value={formCadastro.values.titulo}
                                onChange={formCadastro.handleChange}
                                required
                            />
                            <input
                                placeholder="URL"
                                name="url"
                                value={formCadastro.values.url}
                                onChange={formCadastro.handleChange}
                                required
                            />
                            <select defaultValue={"default"} onChange={formCadastro.handleChange } name="playlist" required>
                                <option value={"default"} disabled> -- Selecione um valor -- </option>
                                {playlists.map((playlist) => {
                                    return <option key={playlist} value={playlist}>{playlist}</option>
                                 })
                                }
                            </select>
                            <strong>A thumbnail será gerada automaticamente para vídeos do YouTube</strong>
                            <button type="submit">
                                Cadastrar
                            </button>
                        </div>
                    </form>
                )
                : false}
        </StyledRegisterVideo>
    )
}