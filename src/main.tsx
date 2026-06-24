import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { QueryClient } from "@tanstack/react-query";

// Importa a árvore de rotas gerada automaticamente
import { routeTree } from "./routeTree.gen";

// 1. Cria a instância do QueryClient
const queryClient = new QueryClient();

// 2. Cria o roteador e INJETA o queryClient no contexto
const router = createRouter({
  routeTree,
  context: {
    queryClient, // <- É a falta disso que estava causando o "e.mount is undefined"
  },
  defaultPreload: "intent",
  // Opcional: Configurações de staling para o router trabalhar bem com o Query
  defaultPreloadStaleTime: 0,
});

// 3. Registra a tipagem do router para ter autocomplete em todo o projeto
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// 4. Renderiza a aplicação
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}