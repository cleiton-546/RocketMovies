import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { FiPlus,  } from 'react-icons/fi';

import { api } from "../../services/api";

import { Container, Content, NewNote } from './style';

import { Header } from '../../components/header';
import { Note } from '../../components/note';
import { Section } from '../../components/section';

export function Home() {
    
    const [notes, setNotes] = useState([]);
    const [search, setSearch] = useState('');

    const navigate = useNavigate();  

    function handleDetails(id) {
        navigate(`/details/${id}`)
    }

    useEffect(() => {
        async function fetchNotes() {
            const response = await api.get(`/notes?title=${search}`);
            setNotes(response.data);
        }
        fetchNotes();
    }, [search])         

    return (
        <Container>

            <Header  onChange={(e) => setSearch(e.target.value)}/>

           <div className="addMovie">
            <h1>Meus filmes</h1>
            <NewNote to="/new">
                <FiPlus />
                Adicionar filme
            </NewNote>
           </div>

            <Content>
                <Section >
                    {
                        notes.map(note => (
                            <Note 
                            $rating={note.rating}
                            key={String(note.id)}
                            data={note}
                            onClick={() => handleDetails(note.id)}
                            />
                        ))
                    }
                </Section>
            </Content>
        </Container>    
    );
}