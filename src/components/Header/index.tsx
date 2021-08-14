import { Container, Content } from "./styles";

interface HeaderProps {
    onOpenNewCustomerModal: () => void;
}

export function Header({onOpenNewCustomerModal} : HeaderProps) {
    return (
        <Container>
            <Content>
               <button type="button" onClick={onOpenNewCustomerModal}>
                    Novo cliente
               </button>
            </Content> 
        </Container> 
    )
}