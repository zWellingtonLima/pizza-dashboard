import { Link } from "react-router";

export function NotFound() {
  return (
    <>
      <title>Página não encontrada</title>
      <meta
        name="description"
        content="Opss. Parece que você saiu um pouco do caminho. Página não encontrada"
      />

      <div className="flex h-screen flex-col items-center justify-center gap-2">
        <h1 className="text-4xl font-bold">Página não encontrada</h1>
        <p className="text-accent-foreground">
          Voltar para o{" "}
          <Link to={"/"} className="text-sky-600 dark:text-sky-400">
            Dashboard
          </Link>
        </p>
      </div>
    </>
  );
}
