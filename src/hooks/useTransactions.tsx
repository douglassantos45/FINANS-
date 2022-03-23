import {
  useEffect,
  useState,
  createContext,
  ReactNode,
  useContext
} from "react";

import { toast } from "react-hot-toast";

import { api } from "../services/api";

type TransactionType = {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createAt: string;
};

/* Omitindo alguns parâmetros */
type TransactionInput = Omit<TransactionType, "id" | "createAt">;

type TransactionContextData = {
  transactions: TransactionType[];
  createTransaction: (transaction: TransactionInput) => void;
};

type TransactionProviderProps = {
  children: ReactNode;
};

const TransactionContext = createContext<TransactionContextData>(
  {} as TransactionContextData
);

export const TransactionProvider = ({ children }: TransactionProviderProps) => {
  const [transactions, setTransactions] = useState<TransactionType[]>([]);

  useEffect(() => {
    api
      .get("/transactions")
      .then((res) => {
        setTransactions(res.data.transactions);
      })
      .catch((err) => console.log(`Error get transections ${err}`));
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {
    try {
      const response = await api.post("/transactions", {
        ...transactionInput,
        createAt: new Date()
      });
      const { transaction } = response.data;

      setTransactions([...transactions, transaction]);

      return toast.success("Transação adicionada com sucesso!");
    } catch (err) {
      console.log("Erro ao inserir os dados de transação", err);
      return toast.error("Erro ao adicionar transação");
    }
  }

  return (
    <TransactionContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
};

export function useTransactions() {
  const context = useContext(TransactionContext);

  return context;
}
