import { Label } from "@radix-ui/react-label";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const signInForm = z.object({
  email: z.string().email(),
});

type SignInForm = z.infer<typeof signInForm>;

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>();

  const handleSignIn = async (data: SignInForm) => {
    console.log(data);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast.success("Enviamos um link de autenticação para o seu e-mail", {
      action: {
        label: "Reenviar",
        onClick: () => handleSignIn(data),
      },
    });
  };

  return (
    <>
      <title>Entrar na sua conta</title>
      <meta name="description" content="Entrar na sua conta da Pizza Shop" />

      <div className="p-8">
        <Button asChild className="absolute top-8 right-8" variant={"outline"}>
          <Link to={"/sign-up"}>Novo estabelecimento</Link>
        </Button>

        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar painel
            </h1>
            <p className="text-muted-foreground text-sm">
              Acompanhe suas vendas pelo painel do parceiro!
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" {...register("email")} />
            </div>

            <Button className="w-full" type="submit" disabled={isSubmitting}>
              Acessar painel
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
