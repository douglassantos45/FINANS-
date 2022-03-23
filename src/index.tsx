import { render } from "react-dom";
import { createServer, Model } from "miragejs";
import { App } from "./App";

/* Criando servidor fake */
try {
  createServer({
    /* Criando um Modelo de banco de dados fake */
    models: {
      /* Criando entidade transaction */
      transaction: Model
    },

    /* Criando Dados fakes na api */
    seeds(server) {
      server.db.loadData({
        transactions: [
          /* {
            id: 1,
            title: "Freelance de website",
            type: "deposit",
            category: "Dev",
            amount: 6000,
            createAt: new Date("01/12/2022")
          },
          {
            id: 2,
            title: "Alugel",
            amount: 1100,
            type: "withdraw",
            category: "Food",
            createAt: new Date("05/03/2021")
          } */
        ]
      });
    },

    routes() {
      /* Todas as chamadas da api vão está no endereçõ 'api' */
      this.namespace = "api";

      /* Buscando os dados fake na rota */
      this.get("/transactions", () => {
        return this.schema.all("transaction");
      });

      this.post("/transactions", (schema, request) => {
        const data = JSON.parse(request.requestBody);

        /* Salvando os dados */
        return schema.create("transaction", data);
      });
    }
  });
} catch (error) {
  console.log("Erro no CreateServer ", error);
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
