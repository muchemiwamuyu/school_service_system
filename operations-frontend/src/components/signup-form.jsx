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

export function SignupForm({ className, ...props }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm()

  const password = watch("admin_password")

  const onSubmit = async (data) => {
    const payLoad = {
      admin_name: data.admin_name,
      admin_email: data.admin_email,
      admin_password: data.admin_password,
    }

    try {
      console.log(payLoad)
      const res = await axios.post(
        "http://localhost:8000/auth/external-access",
        payLoad
      )
      console.log(res.data)
    } catch (error) {
      console.error(error.response?.data || error.message)
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Create your account</CardTitle>
          <CardDescription>
            Enter your details below to create your account
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FieldGroup>

              {/* Username */}
              <Field>
                <FieldLabel>Username</FieldLabel>
                <Input
                  placeholder="John Doe"
                  {...register("admin_name", {
                    required: "Username is required",
                  })}
                />
                {errors.admin_name && (
                  <FieldDescription className="text-red-500">
                    {errors.admin_name.message}
                  </FieldDescription>
                )}
              </Field>

              {/* Email */}
              <Field>
                <FieldLabel>Email</FieldLabel>
                <Input
                  type="email"
                  placeholder="m@example.com"
                  {...register("admin_email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.admin_email && (
                  <FieldDescription className="text-red-500">
                    {errors.admin_email.message}
                  </FieldDescription>
                )}
              </Field>

              {/* Passwords */}
              <Field>
                <Field className="grid grid-cols-2 gap-4">
                  <Field>
                    <FieldLabel>Password</FieldLabel>
                    <Input
                      type="password"
                      {...register("admin_password", {
                        required: "Password is required",
                        minLength: {
                          value: 8,
                          message: "Minimum 8 characters",
                        },
                      })}
                    />
                    {errors.admin_password && (
                      <FieldDescription className="text-red-500">
                        {errors.admin_password.message}
                      </FieldDescription>
                    )}
                  </Field>

                  <Field>
                    <FieldLabel>Confirm Password</FieldLabel>
                    <Input
                      type="password"
                      {...register("confirm_password", {
                        required: "Confirm your password",
                        validate: (value) =>
                          value === password || "Passwords do not match",
                      })}
                    />
                    {errors.confirm_password && (
                      <FieldDescription className="text-red-500">
                        {errors.confirm_password.message}
                      </FieldDescription>
                    )}
                  </Field>
                </Field>

                <FieldDescription>
                  Must be at least 8 characters long.
                </FieldDescription>
              </Field>

              {/* Submit */}
              <Field>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Creating..." : "Create Account"}
                </Button>

                <FieldDescription className="text-center">
                  Already have an account? <a href="/login">Log in</a>
                </FieldDescription>
              </Field>

            </FieldGroup>
          </form>
        </CardContent>
      </Card>

      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our{" "}
        <a href="#">Terms of Service</a> and{" "}
        <a href="#">Privacy Policy</a>.
      </FieldDescription>
    </div>
  )
}
