import { Container } from "./style";
import { Tag } from '../tag'
import { Stars } from "../stars";

export function Note({ data, note,...rest }) {
    return (
        <Container {...rest}>
            <h1>{data.title}</h1>

            <Stars rating={data.rating}/>

            <div className="description">
                <p>{data.description}</p>
            </div>
           
            { data.tags &&
                <footer>
                    {
                        data.tags.map(tag => <Tag key={tag.name} title={tag.name} />)
                    }
                </footer>
            }

        </Container>
    )
}