import { Formik } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { Button } from '@/components/ui/button';
import {
    Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/stores/auth';

const Schema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(32),
});

export default function LoginPage() {
  const { login } = useAuth();

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Enter your credentials to continue</CardDescription>
        </CardHeader>
        <Formik
          validationSchema={toFormikValidationSchema(Schema)}
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={login}
        >
          {({ handleSubmit, handleChange, values, handleBlur, errors }) => (
            <>
              <CardContent>
                <div className="grid items-center w-full gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="abc@xyz.com"
                      value={values.email}
                      onChange={handleChange("email")}
                      onBlur={handleBlur("email")}
                    />
                    {errors.email ? (
                      <span className="text-red-500">{errors.email}</span>
                    ) : null}
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Your password"
                      value={values.password}
                      onChange={handleChange("password")}
                      onBlur={handleBlur("password")}
                    />
                    {errors.password ? (
                      <span className="text-red-500">{errors.password}</span>
                    ) : null}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex w-full">
                <Button onClick={handleSubmit as never} className="w-full">
                  Login
                </Button>
              </CardFooter>
            </>
          )}
        </Formik>
      </Card>
    </main>
  );
}
