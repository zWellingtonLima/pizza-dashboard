import { Label } from "@radix-ui/react-label";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";
import { z } from "zod";

import { registerRestaurant } from "@/api/register-restaurant";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const signUpForm = z.object({
  email: z.string().email(),
  restaurantName: z.string().min(3),
  managerName: z.string(),
  phoneNumber: z.string(),
});

type SignUpForm = z.infer<typeof signUpForm>;

export function SignUp() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>();

  const { mutateAsync: registerRestaurantFn } = useMutation({
    mutationFn: registerRestaurant,
  });

  const handleSignUp = async (data: SignUpForm) => {
    try {
      await registerRestaurantFn({
        email: data.email,
        manager: data.managerName,
        phone: data.phoneNumber,
        restaurantName: data.restaurantName,
      });

      // TODO: Redirect user directly to /dashboard

      toast.success("Restaurante cadastrado com sucesso", {
        action: {
          label: "Entrar na sua conta",
          onClick: () => navigate(`/sign-in?email=${data.email}`),
        },
        duration: 10000,
      });
    } catch (error) {
      toast.error("Erro ao cadastrar restaurante.");
    }
  };

  return (
    <>
      <title>Cadastro</title>
      <meta name="description" content="Crie uma conta em Pizza Shop" />

      <div className="p-8">
        <Button asChild className="absolute top-8 right-8" variant={"outline"}>
          <Link to={"/sign-in"}>Fazer login</Link>
        </Button>

        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Criar conta grátis
            </h1>
            <p className="text-muted-foreground text-sm">
              Seja um parceiro e comece suas vendas!
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
            <div className="flex flex-col space-y-2">
              <Label htmlFor="restaurantName">Nome do estabelecimento</Label>
              <Input
                id="restaurantName"
                type="text"
                {...register("restaurantName")}
              />
            </div>

            <div className="flex flex-col space-y-2">
              <Label htmlFor="managerName">Seu nome</Label>
              <Input
                id="managerName"
                type="text"
                {...register("managerName")}
              />
            </div>

            <div className="flex flex-col space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" {...register("email")} />
            </div>

            <div className="flex flex-col space-y-2">
              <Label htmlFor="phoneNumber">Seu celular</Label>
              <Input id="phoneNumber" type="tel" {...register("phoneNumber")} />
            </div>

            <Button className="w-full" type="submit" disabled={isSubmitting}>
              Finalizar cadastro
            </Button>

            <p className="text-muted-foreground px-6 text-center text-sm leading-relaxed">
              Ao continuar, você concorda com nossos{" "}
              <span className="underline">Termos de Serviços</span> e
              <span className="underline"> Política de Privacidade</span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
