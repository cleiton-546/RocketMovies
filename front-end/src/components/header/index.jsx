import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { Input } from "../input"


import { api } from '../../services/api';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

import { Container, Profile, Logout, Search } from "./styles";


export function Header({...props}) {
   
    const { user, signOut } = useAuth();
    

    const navigation = useNavigate(); 
    function handleSignOut() {
        navigation("/");
        signOut();
    }

    function profile() {
        navigation("/profile");
    }
   

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;


    return (
        <Container>

            <h1>RocketMovies</h1>

            <Search>
                <Input 
                placeholder="Pesquisar pelo titulo"
                {...props}
                />
            </Search>
            <div>
                <strong>{user.name}</strong>    
                 <Logout  onClick={handleSignOut}>
                    <p>sair</p>
                 </Logout>               
            </div>          

            <Profile onClick={profile}>
                 <img src={avatarUrl}
                alt="Foto do usuário"
                /> 
            </Profile>
              

        </Container>
    );
}