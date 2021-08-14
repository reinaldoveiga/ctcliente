import { useCustomers } from "../../hooks/useCustomers";
import { Container } from "./styles";

export function CustomersTable() {
   const { customers } = useCustomers();
    
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Limite de Crédito</th>
                        <th>Status</th>
                        <th>Cliente Desde</th>
                    </tr>
                </thead>

                <tbody>
                {customers.map(customer => (
                        <tr key={customer.id}>
                            <td>{customer.nome}</td>
                            <td className={customer.status}>
                                {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(customer.limiteCredito)}
                            </td>
                            <td>{customer.status}</td>
                            <td>
                            {new Intl.DateTimeFormat('pt-BR').format(
                                new Date(customer.clienteDesde)
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    );
}