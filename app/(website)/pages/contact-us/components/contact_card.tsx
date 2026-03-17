"use client";
import { useForm } from "react-hook-form";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Form,
  FormField,
  FormItem,
  FormLabel,
  Input,
  Textarea,
} from "@/shared/common";

export function ContactCard() {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  return (
    <main className="mx-auto mb-16 max-w-2xl px-4 sm:px-6 lg:mb-72">
      <div>
        <Form {...form}>
          <form action="">
            <Card className="shadow-[8px_8px_0_0_rgba(117,211,255)]">
              <CardHeader>
                <CardTitle className="text-center">
                  <h1 className="text-4xl font-black tracking-tighter sm:text-5xl lg:text-7xl">
                    Contact
                  </h1>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <Input
                          {...field}
                          className="border-1.5 h-12 rounded-3xl border border-foreground "
                        />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <Input
                          {...field}
                          className="border-1.5 h-12 border-foreground border rounded-3xl "
                        />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <Input
                        {...field}
                        className="border-1.5  h-12 border-foreground border rounded-3xl "
                      />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <Textarea
                        {...field}
                        className="border-1.5 border-foreground border rounded-2xl "
                      />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full h-12 font-black text-base rounded-3xl shadow-[6px_6px_0_0_rgba(117,211,255,0.5)]"
                >
                  Send
                </Button>
              </CardContent>
            </Card>
          </form>
        </Form>
      </div>
    </main>
  );
}
