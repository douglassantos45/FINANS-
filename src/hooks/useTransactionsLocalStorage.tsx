import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode
} from "react";
import toast from "react-hot-toast";

type TransactionType = {
  id: number;
  title: string;
  amount: number;
  category: string;
  type: string;
  createAt: string;
};

type TransactionInput = Omit<TransactionType, "id" | "createAt">;

type TransactionContextData = {
  transactions: TransactionType[];
  createTransactionLocalStorage: (transaction: TransactionInput) => void;
};

type TransactionProviderProps = {
  children: ReactNode;
};

/* Criando o Contexto */

const TransactionContext = createContext<TransactionContextData>(
  {} as TransactionContextData
);

/* Função para Envolver os outros Componentes e compartilhar as informações */

export function TransactionProviderLocalStorage({
  children
}: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<TransactionType[]>([]);

  useEffect(() => {
    let transactionLocalStorage = JSON.parse(
      localStorage.getItem("transactions") || "[]"
    );
    setTransactions(transactionLocalStorage);
  }, []);

  function createTransactionLocalStorage(transactionInput: TransactionInput) {
    const transaction = { ...transactionInput, createAt: String(new Date()) };
    transactions.push(transaction as any);

    localStorage.setItem("transactions", JSON.stringify(transactions));

    return toast.success("Transação adicionada com sucesso!");
  }

  return (
    <TransactionContext.Provider
      value={{ transactions, createTransactionLocalStorage }}
    >
      {children}
    </TransactionContext.Provider>
  );
}

/* Função para usar quando for recuperar as informações do contexto */
export function useTransactionLocalStorage() {
  const context = useContext(TransactionContext);

  return context;
}
