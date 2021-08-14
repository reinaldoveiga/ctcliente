import { useState } from "react";
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewCustomerModal } from "./components/NewCustomerModal";
import { CustomersProvider } from "./hooks/useCustomers";

import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root');

export function App() {
  const [isNewCustomerModalOpen, setIsNewCustomerModalOpen] = useState(false);

  function handleOpenNewCustomerModal() {
    setIsNewCustomerModalOpen(true);
  }

  function handleCloseNewCustomerModal() {
    setIsNewCustomerModalOpen(false);
  }

  return (
    <CustomersProvider>
      <Header onOpenNewCustomerModal={handleOpenNewCustomerModal} />

      <Dashboard />

      <NewCustomerModal 
        isOpen={isNewCustomerModalOpen}
        onRequestClose={handleCloseNewCustomerModal}
      />

      <GlobalStyle />
    </CustomersProvider>
  );
}