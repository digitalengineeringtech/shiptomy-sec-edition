"use client"

import { useState, useRef, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import { MessageCircle, Send, X, Minimize2, Maximize2, Settings, RefreshCw, Bot } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { toast } from "sonner"
import { generateAIResponse } from "@/app/actions/ai-chat"

type Message = {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
}

type ChatBotProps = {
  initialOpen?: boolean
}

export function AIChatBot({ initialOpen = false }: ChatBotProps) {
  const [isOpen, setIsOpen] = useState(initialOpen)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! How can I help you with Myanmar Express Hub services today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    if (isOpen && !isMinimized) {
      scrollToBottom()
    }
  }, [messages, isOpen, isMinimized])

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputMessage("")
    setIsTyping(true)

    try {
      // Format chat history for the AI
      const chatHistory = messages.map((msg) => ({
        role: msg.sender === "user" ? "user" as const : "assistant" as const,
        content: msg.content,
      }))

      // Get AI response using our server action
      const aiResponse = await generateAIResponse(userMessage.content, chatHistory)

      // Add bot message
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: aiResponse,
        sender: "bot",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botMessage])
    } catch (error) {
      console.error("Error getting AI response:", error)

      // Add fallback message if AI fails
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content:
          "I'm sorry, I'm having trouble connecting to my knowledge base right now. Please try again in a moment or contact our customer service team directly.",
        sender: "bot",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, errorMessage])

      //   toast({
      //     title: "Connection Error",
      //     description: "There was a problem connecting to the AI service. Please try again later.",
      //     variant: "destructive",
      //   })

      toast("Connection Error.")

    } finally {
      setIsTyping(false)
    }
  }

  const toggleChat = () => {
    if (isMinimized) {
      setIsMinimized(false)
    } else {
      setIsOpen(!isOpen)
    }
  }

  const minimizeChat = () => {
    setIsMinimized(true)
  }

  const maximizeChat = () => {
    setIsMinimized(false)
  }

  const closeChat = () => {
    setIsOpen(false)
  }

  return (
    <>
      {/* Floating chat button */}
      {/* {!isOpen && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <Button onClick={toggleChat} size="lg" className="h-14 w-14 rounded-full shadow-lg hover:scale-105 active:scale-95 duration-200">
            <MessageCircle className="h-6 w-6" />
          </Button>
        </motion.div>

      )} */}

      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          {/* Social media icons that appear on hover */}
          <div className="group relative">
            {/* WhatsApp Icon */}
            {/* <motion.div
              initial={{ scale: 0, opacity: 0, y: 20 }}
              animate={{
                scale: 1,
                opacity: 1,
                y: 0,
                transition: { delay: 0.1 },
              }}
              className="absolute bottom-20 right-1 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-19 group-hover:translate-y-4 max-sm:translate-y-2 max-sm:group-hover:translate-y-0"
            >
              <Button
                onClick={() => window.open("https://wa.me/66815963904", "_blank")}
                size="lg"
                className="h-12 w-12 rounded-full bg-green-500 hover:bg-green-600 shadow-lg"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
              </Button>
            </motion.div> */}

            {/* Messenger Icon */}
            {/* <motion.div
              initial={{ scale: 0, opacity: 0, y: 20 }}
              animate={{
                scale: 1,
                opacity: 1,
                y: 0,
                transition: { delay: 0.2 },
              }}
              // className="absolute right-20 max-sm:bottom-36 bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-4 translate-x-19 max-sm:translate-y-2 max-sm:group-hover:translate-y-0"
              className="absolute right-20 bottom-1 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-4 translate-x-19 max-sm:hidden"
            >
              <Button
                onClick={() => window.open("https://m.me/myanmarexpresshub", "_blank")}
                size="lg"
                className="h-12 w-12 rounded-full bg-blue-500 hover:bg-blue-600 shadow-lg"
              >
                <svg className="h-20 w-20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 4.975 0 11.111c0 3.497 1.745 6.616 4.472 8.652V24l4.086-2.242c1.09.301 2.246.464 3.442.464 6.626 0 12-4.974 12-11.111C24 4.975 18.626 0 12 0zm1.193 14.963l-3.056-3.259-5.963 3.259L10.732 8l3.13 3.259L19.732 8l-6.539 6.963z" />
                </svg>
              </Button>
            </motion.div> */}

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >

              <Button
                onClick={toggleChat}
                size="lg"
                className="h-14 w-14 rounded-full shadow-lg relative overflow-hidden group"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-primary via-blue-500 to-green-500 opacity-0 group-hover:opacity-20"
                />
                <MessageCircle className="h-6 w-6 relative z-10" />
              </Button>
            </motion.div>

            {/* Floating labels */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 0, x: 20 }}
              className="absolute bottom-20 right-16 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
            >
              <div className="bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">WhatsApp</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 0, x: 20 }}
              className="absolute bottom-36 right-16 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
            >
              <div className="bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">Messenger</div>
            </motion.div>
          </div>
        </div>
      )}


      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              height: isMinimized ? "auto" : "500px",
              width: isMinimized ? "300px" : "380px",
            }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-[1000] overflow-hidden rounded-lg shadow-xl"
          >
            <Card className="flex h-full flex-col  shadow-md">
              {/* Chat header */}
              <div className="flex items-center justify-between border-b bg-primary p-3 mx-3 top-1 rounded-lg text-primary-foreground">
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8 p-1 bg-primary-foreground text-primary">
                    {/* <Bot className="h-4 w-4" /> */}
                    <Image src="/myanmarexpresshub_2D_crop.png" alt="Ecommerce" width={32} height={32} />
                  </Avatar>
                  <div>
                    <h3 className="font-medium">Myanmar Express Hub</h3>
                    {isTyping ? (
                      <p className="text-xs">AI is typing...</p>
                    ) : (
                      <div className="flex items-center gap-1 text-xs">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                        <span>AI Assistant</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7 text-primary-foreground hover:bg-primary-foreground/10"
                      >
                        <Settings className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="z-[2000]">
                      <DropdownMenuLabel>Chat Settings</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        onClick={() =>
                          setMessages([
                            {
                              id: "1",
                              content: "Hello! How can I help you with Myanmar Express Hub services today?",
                              sender: "bot",
                              timestamp: new Date(),
                            },
                          ])
                        }
                      >
                        <RefreshCw className="mr-2 h-4 w-4" />
                        <span>Clear Conversation</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  {isMinimized ? (
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={maximizeChat}
                      className="h-7 w-7 text-primary-foreground hover:bg-primary-foreground/10"
                    >
                      <Maximize2 className="h-4 w-4" />
                    </Button>
                  ) : (
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={minimizeChat}
                      className="h-7 w-7 text-primary-foreground hover:bg-primary-foreground/10"
                    >
                      <Minimize2 className="h-4 w-4" />
                    </Button>
                  )}
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={closeChat}
                    className="h-7 w-7 text-primary-foreground hover:bg-primary-foreground/10"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Chat messages */}
              {!isMinimized && (
                <div className="flex-1 overflow-y-auto mini-scroll-container p-4">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                      >
                        {message.sender === "bot" && (
                          <Avatar className="mr-2 h-8 w-8 p-1 self-end bg-primary-foreground text-primary-foreground">
                            {/* <Bot className="h-4 w-4" /> */}
                            <Image src="/myanmarexpresshub_2D_crop.png" alt="Ecommerce" width={32} height={32} />
                          </Avatar>
                        )}
                        <div
                          className={`max-w-[70%] rounded-lg px-3 py-2 ${message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-blend backdrop-blur-4xl shadow-xl"
                            }`}
                        >
                          <p className="text-sm">{message.content}</p>
                          <p className="mt-1 text-right text-xs opacity-70">
                            {message.timestamp.toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </p>
                        </div>
                      </div>
                    ))}
                    {isTyping && (
                      <div className="flex justify-start">
                        <Avatar className="h-8 w-8 p-1 bg-primary-foreground text-primary">
                          {/* <Bot className="h-4 w-4" /> */}
                          <Image src="/myanmarexpresshub_2D_crop.png" alt="Ecommerce" width={32} height={32} />
                        </Avatar>
                        <div className="max-w-[70%] rounded-lg bg-muted px-4 py-3">
                          <div className="flex space-x-1">
                            <div className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/50 [animation-delay:-0.3s]"></div>
                            <div className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/50 [animation-delay:-0.15s]"></div>
                            <div className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/50"></div>
                          </div>
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>
                </div>
              )}

              {/* Chat input */}
              {!isMinimized && (
                <div className="border-t p-3">
                  <div className="flex items-center gap-2 ">
                    <Textarea
                      placeholder="Type your message..."
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                          e.preventDefault()
                          handleSendMessage()
                        }
                      }}
                      className="flex-1 min-h-[40px] max-h-[120px] shadow-xl"
                    />
                    <Button size="icon" onClick={handleSendMessage} disabled={isTyping}>
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
