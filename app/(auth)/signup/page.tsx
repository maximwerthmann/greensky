import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import AuthSeparator from "@/components/auth-separator";
import SignupForm from "./signup-form";
import Providers from "../providers";

export default function Page() {
  return (
    <main className="flex-1 flex items-center justify-center">
      <Card className="w-80">
        <CardHeader>
        <span className="text-center text-xl font-bold">GreenSky</span>
          <CardTitle>
          <span>Sign up</span>
          </CardTitle>
          <CardDescription>Create an account using BlueSky or select a provider below</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
        <SignupForm />
          <AuthSeparator />
          <Providers/>
        </CardContent>
        <CardFooter>
          <span className="text-sm text-muted-foreground">
          By continuing, you agree to our Terms of Service and Privacy Policy.
          </span>
        </CardFooter>
      </Card>
    </main>
  )
}
