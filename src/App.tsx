import { useState } from "react";
import { TransactionProvider } from "./hooks/useTransactions";
import { TransactionProviderLocalStorage } from "./hooks/useTransactionsLocalStorage";

import { Header } from "./components/Header/";
import { ModalComponent } from "./components/Modal";
import { Dashboard } from "./components/Dashboard/";
import { GlobalStyle } from "./assets/styles/global";

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(
    false
  );

  function handleOpenAndCloseTransactionModal() {
    let condition = !isNewTransactionModalOpen ? true : false;
    setIsNewTransactionModalOpen(condition);
  }

  return (
    <TransactionProviderLocalStorage>
      <Header onOpenNewTransactionModal={handleOpenAndCloseTransactionModal} />
      <Dashboard />

      <ModalComponent
        isNewTransactionModalOpen={isNewTransactionModalOpen}
        onRequestClose={handleOpenAndCloseTransactionModal}
      />
      <GlobalStyle />
    </TransactionProviderLocalStorage>
  );
}

{
  /* <TransactionProvider>
      <Header onOpenNewTransactionModal={handleOpenAndCloseTransactionModal} />
      <Dashboard />

      <ModalComponent
        isNewTransactionModalOpen={isNewTransactionModalOpen}
        onRequestClose={handleOpenAndCloseTransactionModal}
      />
      <GlobalStyle />
    </TransactionProvider>
     */
}
