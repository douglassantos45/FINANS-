import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";

import { Container } from "./styles";

export function Dashboard() {
  const [typeTransactions, setTypeTransactions] = useState("");

  function handleShowTypeTransactions(type: string) {
    setTypeTransactions(type);
  }

  return (
    <Container>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            fontSize: "14px"
          }
        }}
      />
      <Summary handleShowTypeTransactions={handleShowTypeTransactions} />
      <TransactionsTable type={typeTransactions} />
    </Container>
  );
}
