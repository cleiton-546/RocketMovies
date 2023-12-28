import { useState } from "react";

import { Header } from '../../components/header';
import { Input } from '../../components/input';
import { Textarea } from '../../components/TextArea';
import { NoteItem } from '../../components/NoteItem';
import { Section} from '../../components/section';
import { Button } from '../../components/button'
import { Back } from "../../components/back"

import { useNavigate,  } from "react-router-dom";
import { api } from '../../services/api';
import { Container, Form } from './style';

export function New() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const [rating, setRating] = useState("");
    const [created_at, setCreated_at] = useState("");
    
    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    const navigate = useNavigate();
     
    function handleBack() {
    navigate(-1)
     
    }

    function handleAddTag() {
        setTags(prevState => [...prevState, newTag])
        setNewTag("");
    }

    function handleRemoveTag(deleted)  {
        setTags(prevState => prevState.filter(tag => tag !== deleted)); 
    }


    async function handleNewNote() {
        if (!title) {
            return alert("Digite o título da nota")
        }

        if (newTag) {
            return alert("Você deixou uma Tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio.")
        }

        await api.post("/notes", {
            title,
            description,
            created_at,
            rating,
            tags
        });

        alert("Nota criada com sucesso!");
        navigate(-1);
    }

    return(
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <Back
                        onClick={handleBack}
                        title="voltar"/>
                    </header>

                    <h1 className="title">Novo filme</h1>

                    <div className="inputs">
                        <Input 
                          placeholder='Titulo'
                          onChange={e => setTitle(e.target.value)}
                        /> 
                         <Input 
                            placeholder="Sua nota (de 0 a 5)"
                            value={rating}
                            type="text"
                            onChange={ e => setRating(e.target.value)}
                            inputMode="number"
                         /> 
                    </div>
  
                    <Textarea
                      value={description}
                      placeholder='Observações'
                      onChange={e => setDescription(e.target.value)}
                    /> 
              
                    <Section>
                        <h2>Marcadores</h2>

                       <div className='tags'>
                         {
                            tags.map((tag, index) => ( 

                               <NoteItem 
                                  key={String(index)}
                                  value={tag}
                                  onClick={() => handleRemoveTag(tag)}
                               />
                            ))
                         }

                        <NoteItem
                          $isNew 
                          placeholder="Novo marcador "
                          onChange={e => setNewTag(e.target.value)}
                          value={newTag}
                          onClick={handleAddTag}
                        />
                      </div>
                    </Section>
                         
                         
                    <div className="edit">     
                       <Button   
                         className="delete" 
                         title="Excluir filme"                      
                         onClick={handleBack} 
                       />   
                       <Button
                         className="save"
                         title='Salvar alterações'     
                         onClick={handleNewNote}           
                       />       
                                       
                    </div>               
                </Form>
            </main>
        </Container>
    )
}