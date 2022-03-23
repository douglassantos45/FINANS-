import { FormEvent, useState } from "react";
import { FiArrowUpCircle, FiArrowDownCircle, FiXCircle } from "react-icons/fi";

import { useTransactions } from "../../hooks/useTransactions";
import { useTransactionLocalStorage } from "../../hooks/useTransactionsLocalStorage";
import { Input } from "../Input";

import { Container, TransactionTypeContainer, RadioBox } from "./styles";

export function NewTransactionModal() {
  const { createTransaction } = useTransactions();
  const { createTransactionLocalStorage } = useTransactionLocalStorage();

  const [title, setTitle] = useState("");
  const [amount, setValue] = useState(0);
  const [category, setCategory] = useState("");
  const [type, setType] = useState("deposit");

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    if (amount === 0) return;

    /* createTransaction({
      title,
      amount,
      category,
      type
    }); */

    createTransactionLocalStorage({
      title,
      amount,
      category,
      type
    });

    setTitle("");
    setValue(0);
    setCategory("");
  }

  return (
    <Container onSubmit={handleCreateNewTransaction}>
      <h2>Cadastrar Transações</h2>
      {/* <Input /> */}
      <div className="input-group">
        <input
          placeholder="Título"
          onChange={(event) => setTitle(event.target.value)}
          value={title}
          required
        />
        <button
          className={`${title !== "" ? "clean-input" : ""}`}
          onClick={() => setTitle("")}
        >
          <FiXCircle />
        </button>
      </div>

      <div className="input-group">
        <input
          placeholder="Valor"
          type="number"
          onChange={(event) => setValue(Number(event.target.value))}
          required
          value={amount === 0 ? "" : amount}
        />
      </div>
      <div className="input-group">
        <input
          placeholder="Categoria"
          onChange={(event) => setCategory(event.target.value)}
          value={category}
        />

        <button
          className={`${category !== "" ? "clean-input" : ""}`}
          onClick={() => setCategory("")}
        >
          <FiXCircle />
        </button>
      </div>

      <TransactionTypeContainer>
        <RadioBox
          type="button"
          isActive={type === "deposit"}
          activeColor="green"
          onClick={() => setType("deposit")}
        >
          <FiArrowUpCircle className="deposit-color" />
          <span>Entrada</span>
        </RadioBox>

        <RadioBox
          type="button"
          isActive={type === "withdraw"}
          activeColor="red"
          onClick={() => setType("withdraw")}
        >
          <FiArrowDownCircle className="withdraw-color" />
          <span>Saída</span>
        </RadioBox>
      </TransactionTypeContainer>

      <button type="submit">Cadastrar</button>
    </Container>
  );
}
