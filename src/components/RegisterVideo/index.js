import React, {useState} from "react";
import { StyledRegisterVideo } from "./styles";
import config from '../../../config.json'

// Whiteboarding
// Custom Hook
function useForm(propsDoForm) {
    const [values, setValues] = useState(propsDoForm.initialValues);
    console.log(values)
    return {
        values,
        handleChange: (evento) => {
    
            const value = evento.target.value;
            const name = evento.target.name;
            const source = evento.target.nextElementSibling.src = value
            let videoId, result

            if (result = value.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/)) {
                videoId = result.pop();
            }
            else if (result = value.match(/youtu.be\/(.{11})/)) {
                videoId = result.pop();
            }
            
            setValues({
                ...values,
                [name]: value,
                source: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
            });
        },
        clearForm() {
            setValues({});
        }
    };
}

export const RegisterVideo = () => {
    const formCadastro = useForm({
        initialValues: { titulo: "Frost punk", url: "https://youtube..",}
    });
    const [formVisivel, setFormVisivel] = useState(false);

    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => setFormVisivel(true)}>
                +
            </button>
            {formVisivel
                ? (
                    <form onSubmit={(evento) => {
                        evento.preventDefault();
                        setFormVisivel(false);
                        formCadastro.clearForm();
                    }}>
                        <div>
                            <button type="button" className="close-modal" onClick={() => setFormVisivel(false)}>
                                X
                            </button>
                            <input
                                placeholder="Titulo do vídeo"
                                name="titulo"
                                value={formCadastro.values.titulo}
                                onChange={formCadastro.handleChange}
                            />
                            <input
                                placeholder="URL"
                                name="url"
                                value={formCadastro.values.url}
                                onChange={formCadastro.handleChange}
                            />
                            <img 
                                src={formCadastro.values.source} height={'200px'}>
                            </img>
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