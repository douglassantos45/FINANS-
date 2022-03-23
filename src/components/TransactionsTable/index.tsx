import { Container } from "./styles";
import { useTransactions } from "../../hooks/useTransactions";
import { useTransactionLocalStorage } from "../../hooks/useTransactionsLocalStorage";

import { FiActivity, FiEdit } from "react-icons/fi";

type TransactionsTableProps = {
  type: string;
};

export function TransactionsTable({ type }: TransactionsTableProps) {
  /* const { transactions } = useTransactions(); */
  const { transactions } = useTransactionLocalStorage();
  return (
    <Container>
      <table>
        {!transactions.length ? (
          <div>
            <FiActivity />
            <p>Nenhuma transação cadastrada</p>
          </div>
        ) : (
          <thead>
            <tr>
              <th>Título</th>
              <th>Valor</th>
              <th>Categorias</th>
              <th>Data</th>
            </tr>
          </thead>
        )}
        {/* Transaction com localStorage */}

        {/* End */}

        <tbody>
          {type !== ""
            ? transactions.map(
                (transaction) =>
                  transaction.type === type && (
                    <tr key={transaction.id}>
                      <td>{transaction.title}</td>
                      <td className={transaction.type}>
                        {transaction.type === "withdraw" ? "-" : ""}
                        {/* Formantando o valor monetário */}
                        {new Intl.NumberFormat("pt-BR", {
                          style: "currency",
                          currency: "BRL"
                        }).format(transaction.amount)}
                      </td>
                      <td>{transaction.category}</td>
                      <td>
                        {/* Formantando a data para uma data mais legível */}
                        {new Intl.DateTimeFormat("pt-BR").format(
                          new Date(transaction.createAt)
                        )}
                      </td>
                    </tr>
                  )
              )
            : transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td>{transaction.title}</td>
                  <td className={transaction.type}>
                    {transaction.type === "withdraw" ? "-" : ""}
                    {/* Formantando o valor monetário */}
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL"
                    }).format(transaction.amount)}
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {/* Formantando a data para uma data mais legível */}
                    {new Intl.DateTimeFormat("pt-BR").format(
                      new Date(transaction.createAt)
                    )}
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </Container>
  );
}
