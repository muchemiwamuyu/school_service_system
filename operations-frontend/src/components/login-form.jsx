import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import axios from "axios"
import { toast } from "sonner"
import { useNavigate } from "react-router-dom"
import { useAuth } from "./context/AuthContext"

export function LoginForm({ className, ...props }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm()

  const navigate = useNavigate()
  const {login} = useAuth()

  const onSubmit = async (data) => {
  const payLoad = {
    admin_email: data.admin_email,
    admin_password: data.admin_password,
  }

  try {
    const res = await axios.post(
      "http://localhost:8000/auth/external-login-access/",
      payLoad
    )

    toast.success(res.data.message || "Login successful")
    reset()
    login({"id": 1, "role": "admin"})
    
    // Store admin info
    localStorage.setItem("adminData", JSON.stringify(res.data.user)) // full object
    
    navigate("/dashboard")
  } catch (error) {
    toast.error(error.response?.data?.error || "Login failed")
    console.error(error.response?.data || error.message)
  }
}


  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  {...register("admin_email", {
                    required: "Email is required",
                  })}
                />
                {errors.admin_email && (
                  <FieldDescription className="text-red-500">
                    {errors.admin_email.message}
                  </FieldDescription>
                )}
              </Field>

              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  {...register("admin_password", {
                    required: "Password is required",
                  })}
                />
                {errors.admin_password && (
                  <FieldDescription className="text-red-500">
                    {errors.admin_password.message}
                  </FieldDescription>
                )}
              </Field>

              <Field>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Logging in..." : "Login"}
                </Button>
                <Button variant="outline" type="button">
                  Login with Google
                </Button>
                <FieldDescription className="text-center">
                  Don&apos;t have an account? <a href="/sign">Sign up</a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
