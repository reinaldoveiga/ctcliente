import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface Customer {
    id: number;
    nome: string;
    tipo: string;
    cpfCnpj: string;
    rg: string;
    dataNascimento: string;
    dataEmissaoRg: string;
    nomeMae: string;
    limiteCredito: number;
    estadoCivil: string;
    clienteDesde: string;
    status: string;

    enderecoResidencial: {
        bairro: string;
        cep: string;
        complemento: string;
        localidade: string;
        logradouro: string;
        numero: string;
        uf: string;
    };

    
    telefones: [{
        area: string;
        ramal: string;
        telefone: string;
        tipoTelefone: string;
        sms: number;
    }
]

}



type CustomerInput = Omit<Customer, 'id' | 'clienteDesde'>;

interface CustomersProviderProps {
    children: ReactNode;
}

interface CustomersContextData {
    customers : Customer[];
    createCustomer: (customer: CustomerInput) => Promise<void>;
}

const CustomersContext = createContext<CustomersContextData>(
    {} as CustomersContextData
);

export function CustomersProvider({ children }: CustomersProviderProps) {
    const [customers, setCustomers] = useState<Customer[]>([]);
    
    useEffect(() => {
        api.get('consumidores')
            .then(response => setCustomers(response.data))
        
        
        }, []);


async function createCustomer(CustomerInput: CustomerInput) {
    const response = await api.post('/consumidores', {
        ...CustomerInput,
        clienteDesde: new Date(),
    })
    

    //console.log(response.data);
    const  customer  = response.data;

  
 
    setCustomers([
        ...customers,
         customer,
    ]);

}

return (
    <CustomersContext.Provider value= {{ customers, createCustomer }}>
        {children}
    </CustomersContext.Provider>
);

}

export function useCustomers() {
    const context = useContext(CustomersContext);

    return context;
}