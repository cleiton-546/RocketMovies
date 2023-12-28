import { Container } from './styles'
import { IoMdArrowBack } from "react-icons/io"


export function Back({ title, ...rest }) {
    return(
        <Container
        {...rest}
        type="button">
            <IoMdArrowBack/>
            {title}
        </Container>
    )
}