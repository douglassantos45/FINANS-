import { useTransactions } from "../../hooks/useTransactions";
import { useTransactionLocalStorage } from "../../hooks/useTransactionsLocalStorage";

import {
  FiArrowUpCircle,
  FiArrowDownCircle,
  FiDollarSign
} from "react-icons/fi";

import { Container } from "./styles";

type SummaryProps = {
  handleShowTypeTransactions: (type: string) => void;
};

export function Summary({ handleShowTypeTransactions }: SummaryProps) {
  /* const { transactions } = useTransactions(); */
  const { transactions } = useTransactionLocalStorage();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposite += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraw += transaction.amount;
        acc.total -= transaction.amount;
      }

      return acc;
    },
    {
      deposite: 0,
      withdraw: 0,
      total: 0
    }
  );

  return (
    <Container>
      <div
        onClick={() => {
          return handleShowTypeTransactions("deposit");
        }}
        className="button"
      >
        <header>
          <p>Entradas</p>
          <FiArrowUpCircle className="deposit-color" />
        </header>
        <strong>${summary.deposite}</strong>
      </div>

      <div
        onClick={() => handleShowTypeTransactions("withdraw")}
        className="button"
      >
        <header>
          <p>Saídas</p>
          <FiArrowDownCircle className="withdraw-color" />
        </header>
        <strong>${summary.withdraw}</strong>
      </div>

      <div
        className={`button ${
          summary.total < 0 ? "withdraw-background" : "highlight-background"
        }`}
        onClick={() => handleShowTypeTransactions("")}
      >
        <header>
          <p>Total</p>
          <FiDollarSign />
        </header>
        <strong>${summary.total}</strong>
      </div>
    </Container>
  );
}
