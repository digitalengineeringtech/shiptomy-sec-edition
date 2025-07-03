"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Loader, MessageCircle, Send, User } from "lucide-react"
import z from "zod"
import { contactSchema } from "@/validators/emails/createContactSchema"
import { handleInputChange } from "@/utils/handleInputChange"
import { toast } from "sonner"
import router from "next/router"
import ContactUs from "@/components/ContactUs"
import { useTranslations } from "next-intl"
import { useIntlApp } from "@/context/IntlProviderWrapper"

type CreateContactFormSchema = z.infer<typeof contactSchema>;

export default function ChatPage() {
  // const [messages, setMessages] = useState([
  //   {
  //     id: 1,
  //     sender: "system",
  //     content: "Welcome to Myanmar Express hub! How can we help you today?",
  //     timestamp: new Date(),
  //   },
  // ])
  // const [inputMessage, setInputMessage] = useState("")

  // const handleSendMessage = () => {
  //   if (!inputMessage.trim()) return

  //   // Add user message
  //   const userMessage = {
  //     id: messages.length + 1,
  //     sender: "user",
  //     content: inputMessage,
  //     timestamp: new Date(),
  //   }

  //   setMessages([...messages, userMessage])
  //   setInputMessage("")

  //   // Simulate response after a short delay
  //   setTimeout(() => {
  //     const responseMessage = {
  //       id: messages.length + 2,
  //       sender: "system",
  //       content:
  //         "Thank you for your message. Our customer service team will get back to you shortly. For immediate assistance, please call us at +95 9 123 456 789.",
  //       timestamp: new Date(),
  //     }
  //     setMessages((prev) => [...prev, responseMessage])
  //   }, 1000)
  // }

  const t = useTranslations();
  const { locale, changeLanguage } = useIntlApp();


  const [formData, setFormData] = useState<CreateContactFormSchema>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<CreateContactFormSchema>>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  // const [wrongEmail, setWrongEmail] = useState("");

  // const handleValueChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   e.preventDefault();
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  const handleSubjectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      subject: value,
    }));
  };


  const handleClickFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Validate using Zod
    const result = contactSchema.safeParse(formData);

    if (result.success) {
      const response = await fetch("/api/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json" // Added Content-Type header
        },
        body: JSON.stringify(formData)
      });

      // console.log(response, "rrrrrrrrrrrr")

      if (response.status == 200) {
        toast.success("Your Email was just sent! 🎉");
        // router.refresh();
        setLoading(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setErrors({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: ""
        })
        // setWrongEmail("");
      } else {
        toast.error("Your Email was not sent! ❌")
        if (response.status == 500) {
          const data = await response.json();
          if (data.errors) {
            const mappedErrors = Object.keys(
              data.errors
            ).reduce((acc, key) => {
              acc[key] = data.errors?.[key]?.[0] || "";
              return acc;
            }, {} as Record<string, string>);

            setErrors(mappedErrors);
            setLoading(false);
          } else {
            toast.error("Something went wrong! 😥");
            // setWrongEmail("Your Email Address is wrong!")
            setLoading(false);
          }

          setErrorMessage(data.message);
        }
        setLoading(false);
      }
    } else {
      // Map Zod errors to form fields
      const errorMessages = result.error.flatten().fieldErrors;

      setErrors(
        Object.fromEntries(
          Object.entries(errorMessages).map(([key, messages]) => [
            key,
            messages?.[0] || "",
          ])
        )
      );

      setLoading(false);
    }
  };

  // console.log(formData, "fffffffffffffff")

  return (
    <div className="container mx-auto py-12 px-5">
      <div className="mb-12 text-center">
        <h1 className={`text-5xl font-bold tracking-tighter max-lg:text-4xl ${locale == "my" && "leading-14 max-sm:text-3xl md:pb-3"}`}>{t("CHAT.TITLE")}</h1>
        <p className={`mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl ${locale == "my" && "leading-8 max-sm:leading-7"}`}>
          {t("CHAT.INTRO")}
        </p>
      </div>

      <div>
        <Tabs defaultValue="email">
          <TabsList className="w-[40%] max-sm:w-[75%] mx-auto">
            <TabsTrigger value="email">Email</TabsTrigger>
            <TabsTrigger value="social">Social</TabsTrigger>
          </TabsList>
          <TabsContent value="email">
            <Card className="w-[70%] max-sm:w-[90%] mx-auto mt-6">
              <CardHeader>
                <CardTitle>Contact Form</CardTitle>
                <CardDescription>Send us a message and we'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <form onSubmit={handleClickFormSubmit}>
                <CardContent>
                  {errorMessage ? <p className="text-red-500 py-2">{errorMessage}</p> : ""}
                  <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input name="name" value={formData.name ?? ""} onChange={(event) => handleInputChange(event, setFormData)} id="name" placeholder="Your name" className={`${errors.name && "!border-red-400 "}`}/>
                      {errors.name && (
                        <span style={{ color: "red", fontSize: "12px" }}>
                          {errors.name}
                        </span>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input name="email" value={formData.email ?? ""} onChange={(event) => handleInputChange(event, setFormData)} id="email" type="email" placeholder="Your email" className={`${errors.email && "!border-red-400 "}`}/>
                      {/* {wrongEmail && (
                        <span style={{ color: "red", fontSize: "12px" }}>
                          {wrongEmail}
                        </span>
                      )} */}
                      {errors.email && (
                        <span style={{ color: "red", fontSize: "12px" }}>
                          {errors.email}
                        </span>
                      )}

                    </div>
                  </div>
                  <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-4 py-5">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input name="phone" value={formData.phone ?? ""} onChange={(event) => handleInputChange(event, setFormData)} id="phone" placeholder="Your phone number" className={`${errors.phone && "!border-red-400 "}`}/>
                      {errors.phone && (
                        <span style={{ color: "red", fontSize: "12px" }}>
                          {errors.phone}
                        </span>
                      )}
                    </div>
                    <div className="space-y-2 !w-full col-span-1">
                      <Label htmlFor="subject">Subject</Label>
                      <Select
                        name="subject"
                        onValueChange={handleSubjectChange}
                        value={formData.subject}
                        
                      >
                        <SelectTrigger className={`${errors.subject && "!border-red-400 "}`}>
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                          <SelectItem value="Shipping Question">Shipping Question</SelectItem>
                          <SelectItem value="Order Status">Order Status</SelectItem>
                          <SelectItem value="Returns & Refunds">Returns & Refunds</SelectItem>
                          <SelectItem value="Complaint">Complaint</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.subject && (
                        <span style={{ color: "red", fontSize: "12px" }}>
                          {errors.subject}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea name="message" value={formData.message ?? ""} onChange={(event) => handleInputChange(event, setFormData)} id="message" placeholder="Your message" rows={5} className={`${errors.message && "!border-red-400 "}`}/>
                    {errors.message && (
                      <span style={{ color: "red", fontSize: "12px" }}>
                        {errors.message}
                      </span>
                    )}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full hover:scale-100 active:scale-95 duration-200 mt-5"><Loader className={`${loading ? "animate-spin" : "hidden"}`}/>Submit</Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
          <TabsContent value="social">
            <div className="mx-auto max-w-2xl mt-9  flex flex-wrap justify-center items-center gap-24 ">
              <ContactUs link="https://m.me/myanmarexpresshub" img="/messenger.png" title="Messenger" />
              <ContactUs link="https://www.facebook.com/myanmarexpresshub/" img="/facebook.png" title="Facebook" />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
