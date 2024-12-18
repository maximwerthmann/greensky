"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LockIcon, LucideAtSign, MailIcon } from "lucide-react";
import Link from "next/link";

const LoginformSchema = z.object({
  handle: z.string().url({
    message: "Please enter a valid handle or domain",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long",
  }),
});

export default function LoginForm() {
  const form = useForm<z.infer<typeof LoginformSchema>>({
    resolver: zodResolver(LoginformSchema),
    defaultValues: {
      handle: "",
      password: "",
    },
  });

  function handleSubmit() {
    console.log("submitted");
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex flex-col space-y-4"
      >
        <div className="flex flex-col space-y-2">
          <FormField
            control={form.control}
            name="handle"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex items-center relative">
                    <LucideAtSign type="standard" strokeWidth={2} size={16} className="absolute left-2.5" />
                    <Input
                      {...field}
                      className="pl-8"
                      placeholder="handle.domain"
                      type="username"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex items-center relative">
                    <LockIcon type="standard" strokeWidth={2} size={16} className="absolute left-2.5" />
                    <Input
                      {...field}
                      className="pl-8"
                      placeholder="password"
                      type="password"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="space-y-2 flex flex-col">
          <Button type="submit">
            Log in
          </Button>
          <Link href={'/signup'}>
          <Button variant={'outline'} className="w-full">
            Sign up
          </Button></Link>
        </div>
      </form>
    </Form>
  );
}
