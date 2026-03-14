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
import { TypographyH1 } from "@/shared/common/typography";

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
    <main className="max-w-xl mx-auto mb-72">
      <div>
        <Form {...form}>
          <form action="">
            <Card className="shadow-[8px_8px_0_0_rgba(117,211,255)]">
              <CardHeader>
                <CardTitle className="text-center">
                  <h1 className="text-7xl font-black tracking-tighter">
                    Contact
                  </h1>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <Input
                          {...field}
                          className="border-1.5 rounded-2xl border border-foreground "
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
                          className="border-1.5 border-foreground border rounded-2xl "
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
                        className="border-1.5 border-foreground border rounded-2xl "
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
                        className="border-1.5 border-foreground border rounded-xl "
                      />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full shadow-[4px_4px_0_0_rgba(117,211,255,0.3)]"
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
