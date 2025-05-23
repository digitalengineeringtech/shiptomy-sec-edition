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
      {!isOpen && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <Button onClick={toggleChat} size="lg" className="h-14 w-14 rounded-full shadow-lg hover:scale-105 active:scale-95 duration-200">
            <MessageCircle className="h-6 w-6" />
          </Button>
        </motion.div>
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
            className="fixed bottom-6 right-6 z-50 overflow-hidden rounded-lg shadow-xl"
          >
            <Card className="flex h-full flex-col">
              {/* Chat header */}
              <div className="flex items-center justify-between border-b bg-primary p-3 text-primary-foreground">
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8 bg-primary-foreground text-primary">
                    {/* <Bot className="h-4 w-4" /> */}
                    <Image src="/logo-transparent_crop.png" alt="Ecommerce" width={32} height={32} />
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
                    <DropdownMenuContent align="end">
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
                <div className="flex-1 overflow-y-auto p-4">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                      >
                        {message.sender === "bot" && (
                          <Avatar className="mr-2 h-8 w-8 self-end bg-primary-foreground text-primary-foreground">
                            {/* <Bot className="h-4 w-4" /> */}
                            <Image src="/logo-transparent_crop.png" alt="Ecommerce" width={32} height={32} />
                          </Avatar>
                        )}
                        <div
                          className={`max-w-[70%] rounded-lg px-3 py-2 ${message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
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
                        <Avatar className="h-8 w-8 bg-primary-foreground text-primary">
                          {/* <Bot className="h-4 w-4" /> */}
                          <Image src="/logo-transparent_crop.png" alt="Ecommerce" width={32} height={32} />
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
                  <div className="flex items-center gap-2">
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
                      className="flex-1 min-h-[40px] max-h-[120px]"
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
