import Aside from "../Aside";
import Tasks from "../Tasks";

import { Container } from "./styles";

export default function Main() {
    return (
        <Container>
            <Aside />
            <Tasks />
        </Container>
    )
}