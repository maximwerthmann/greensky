import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import LoginForm from "./login-form";
import AuthSeparator from "@/components/auth-separator";
import Providers from "../providers";

export default function Page() {
  return (
    <main className="flex-1 flex items-center justify-center">
      <Card className="w-80">
        <CardHeader>
          <span className="text-center text-xl font-bold">GreenSky</span>
          <CardTitle>
          <span>Log in</span>
          </CardTitle>
          <CardDescription>Log in to your account using BlueSky or select a provider below</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <LoginForm />
          <AuthSeparator />
          <Providers/>
        </CardContent>
      </Card>
    </main>
  )
}
