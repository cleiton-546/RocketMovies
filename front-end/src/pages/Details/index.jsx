import { useState, useEffect } from "react"
import { Container,  Content } from "./style"
import { useParams, useNavigate } from "react-router-dom"
import { useAuth } from '../../hooks/auth';
import { format } from "date-fns"
import { CiTimer } from "react-icons/ci";

import { api } from '../../services/api'

import { Header } from '../../components/header'
import { Section } from '../../components/section'
import { Tag } from '../../components/tag'
import { ButtonText } from '../../components/buttonText'
import { Stars } from "../../components/stars"
import { Back } from "../../components/back";
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';


export function Details() {
  
  const [data, setData] = useState(null);
 
  const params = useParams();
  const navigate = useNavigate();

  const { user }  = useAuth(); 
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
   
  function handleBack() {
    navigate(-1)

  }

  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente remover a nota?")

    if (confirm) {
      await api.delete(`/notes/${params.id}`);
      navigate(-1)
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }
    fetchNote()
  }, []);

  return(
  <Container> 
      <Header />

      {
        data &&
       <main>
      <Content>
        <div className="buttons">
        <Back
        onClick={handleBack}
        title="Voltar" />
        <ButtonText
        onClick={handleRemove}
        title="Excluir Nota"/>
        </div>

        <div className="title">
          <h1>{data.title}</h1>
           { data.tags &&
             <Stars 
               rating={data.rating}/>
           }
        </div>

        <div className="userTimer">
        <span>
          <img src={avatarUrl} alt="imagem do usuário"/>
          Por {user.name}
        </span>  
        <span>
        <CiTimer /> 
        {data.tags && (
          <>{format( Date(data.created_at), 'dd/MM/yyyy')}  ás  {format(Date(data.created_at), "HH:mm:ss")}</>
        )}
        </span>
        </div>

        {
          data.tags &&
          <Section>
            {
              data.tags.map(tag => (
              <Tag 
              key={String(tag.id)}
              title={tag.name}              
              />
              ))
            }
            
          </Section>
        }

        <p>{data.description}</p> 

      </Content>
       </main>
      }
  </Container>
  )
}