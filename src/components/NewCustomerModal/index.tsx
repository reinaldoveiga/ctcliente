import Modal from 'react-modal';
import { Container } from './styles';

import closeImg from '../../assets/close.svg';

import { useCustomers } from '../../hooks/useCustomers';
import { FormEvent, useState } from 'react';

interface NewCustomerModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewCustomerModal({isOpen, onRequestClose} : NewCustomerModalProps) {
    const { createCustomer } = useCustomers();

    const [nome, setNome] = useState('');
    const [tipo, setTipo] = useState('FISICO');
    const [cpfCnpj, setCpfCnpj] = useState('');
    const [rg, setRg] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [dataEmissaoRg, setDataEmissaoRg] = useState('');
    const [nomeMae, setNomeMae] = useState('');
    const [limiteCredito, setLimiteCredito] = useState(0)
    const [estadoCivil, setEstadoCivil] = useState('SOLTEIRO');
    const [status, setStatus] = useState('ATIVO');


    const [bairro, setBairro] = useState('');
    const [cep, setCep] = useState('');
    const [complemento, setComplemento] = useState('');
    const [localidade, setLocalidade] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [numero, setNumero] = useState('');
    const [uf, setUf] = useState('');


    const [area, setArea] = useState('');
    const [ramal, setRamal] = useState('');
    const [telefone, setTelefone] = useState('');
    const [tipoTelefone, setTipoTelefone] = useState('');
    const [sms, setSms] = useState(1);

    async function handleCreateNewCustomer(event: FormEvent) {
      event.preventDefault()
      
      await createCustomer({
        nome, 
        tipo,
        cpfCnpj, 
        rg,
        dataNascimento, 
        dataEmissaoRg, 
        nomeMae, 
        limiteCredito,
        estadoCivil,
        status,


        enderecoResidencial: {
        bairro,
        cep,
        complemento,
        localidade,
        logradouro,
        numero,
        uf,
      },
      
      telefones:[{
        area,
        ramal,
        telefone,
        tipoTelefone,
        sms,
      }
    ]
     
      

      })
        
        setNome('');
        setTipo('FISICO');
        setCpfCnpj(''); 
        setRg('');
        setDataNascimento(''); 
        setDataEmissaoRg('');
        setNomeMae('');
        setLimiteCredito(0);
        setEstadoCivil('SOLTEIRO');
        setStatus('ATIVO');


        setBairro('');
        setCep('');
        setComplemento('');
        setLocalidade('');
        setLogradouro('');
        setNumero('');
        setUf('');

        setArea('');
        setRamal('');
        setTelefone('');
        setTipoTelefone('');
        setSms(1);


        onRequestClose();
    
    }

  
    return (
        <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className='react-modal-content'
      >

        <button type="button" onClick={onRequestClose} className="react-modal-close">
            <img src={closeImg} alt="Fechar modal" />
        </button>

        <Container onSubmit={handleCreateNewCustomer}>
        <h2>Cadastrar cliente</h2>

        
        <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={({ target }) => setNome(target.value)}
            
        />
        

        <label>
          Tipo:
          <select name="tipo" 
          value={tipo}
          onChange={({ target }) => setTipo(target.value)}
          
          >
            <option value="FISICO">Físico</option>
            <option value="JURIDICO">Jurídico</option>
          </select>
        </label>

        
        <input
            type="text"
            placeholder="Cpf/Cnpj"
            value={cpfCnpj}
            onChange={({ target }) => setCpfCnpj(target.value)}
        />
        

        <input
            type="text"
            placeholder="RG"
            value={rg}
            onChange={({ target }) => setRg(target.value)}
        />

        <input
        type="text"
            placeholder="Data de Nascimento"
            value={dataNascimento}
            onChange={({ target }) => setDataNascimento(target.value)}
        />

        <input
        type="text"
            placeholder="Data de Emissão do RG"
            value={dataEmissaoRg}
            onChange={({ target }) => setDataEmissaoRg(target.value)}
        />

        <input
        type="text"
            placeholder="Nome da Mãe"
            value={nomeMae}
            onChange={({ target }) => setNomeMae(target.value)}
        />

        <input
        type="number"
            placeholder="Limite de Crédito"
            value={limiteCredito}
            onChange={({ target }) => setLimiteCredito(Number(target.value))}
        />

        
        <label>
          Estado Civil:
          <select name="estadoCivil" 
          value={estadoCivil}
          onChange={({ target }) => setEstadoCivil(target.value)}
          
          >
            <option value="CASADO">Casado</option>
            <option value="SOLTEIRO">Solteiro</option>
          </select>
        </label>
        

        
        <label>
          Status:
          <select name="status" 
          value={status}
          onChange={({ target }) => setStatus(target.value)}
          
          >
            <option value="ATIVO">Ativo</option>
            <option value="CANCELADO">Cancelado</option>
          </select>
        </label>




        <input
            placeholder="Bairro"
            value={bairro}
            onChange={({ target }) => setBairro(target.value)}
        />

        <input
            placeholder="cep"
            value={cep}
            onChange={({ target }) => setCep(target.value)}
        />

        <input
            placeholder="complemento"
            value={complemento}
            onChange={({ target }) => setComplemento(target.value)}
        />

        <input
            placeholder="localidade"
            value={localidade}
            onChange={({ target }) => setLocalidade(target.value)}
        />

        <input
            placeholder="logradouro"
            value={logradouro}
            onChange={({ target }) => setLogradouro(target.value)}
        />

        <input
            placeholder="número"
            value={numero}
            onChange={({ target }) => setNumero(target.value)}
        />

        <input
            placeholder="uf"
            value={uf}
            onChange={({ target }) => setUf(target.value)}
        />


     

        <input
            placeholder="area"
            value={area}
            onChange={({ target }) => setArea(target.value)}
            
            
        />
       

        <input
            placeholder="ramal"
            value={ramal}
            onChange={({ target }) => setRamal(target.value)}
        />
        <input
            placeholder="telefone"
            value={telefone}
            onChange={({ target }) => setTelefone(target.value)}
        />
        <input
            placeholder="Tipo do Telefone"
            value={tipoTelefone}
            onChange={({ target }) => setTipoTelefone(target.value)}
        />


        <label>
          Receber SMS:
          <select name="sms" 
          value={sms}
          onChange={({ target }) => setSms(Number(target.value))}
          
          >
            <option value="1">Sim</option>
            <option value="0">Não</option>
          </select>
        </label>

        
        
        

        <button type="submit">Cadastrar</button>
      </Container>

    </Modal>
    );
}