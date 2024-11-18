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
import { LucideAtSign, LucideLock } from "lucide-react";
import Link from "next/link";

const LoginformSchema = z
  .object({
    handle: z.string(),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters long",
    }),
    confirmPassword: z.string(),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
        path: ["confirmPassword"],
      });
    }
  });

export default function SignupForm() {
  const form = useForm<z.infer<typeof LoginformSchema>>({
    resolver: zodResolver(LoginformSchema),
    defaultValues: {
      handle: "",
      password: "",
      confirmPassword: "",

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
                      placeholder="handle"
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
                  <LucideLock type="standard" strokeWidth={2} size={16} className="absolute left-2.5" />
                    <Input
                      {...field}
                      className="pl-8"
                      placeholder="Password"
                      type="password"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex items-center relative">
                  <LucideLock type="standard" strokeWidth={2} size={16} className="absolute left-2.5" />
                    <Input
                      {...field}
                      className="pl-8"
                      placeholder="Confirm Password"
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
            Sign up
          </Button>
          <Link href={'/login'}>
          <Button variant={'outline'} className="w-full">
            Log in
          </Button></Link>
        </div>
      </form>
    </Form>
  );
}
