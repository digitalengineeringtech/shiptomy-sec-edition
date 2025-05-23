import Link from "next/link"
import { CheckCircle, LineChart, Users, Lightbulb, TrendingUp, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ConsultingServicePage() {
  return (
    <div className="container py-12 mx-auto">
      <div className="mb-12 text-center">
        <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
          <LineChart className="mr-1 h-4 w-4" />
          Professional Consulting
        </div>
        <h1 className="mt-4 text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Consulting Service</h1>
        <p className="mx-auto mt-6 max-w-[800px] text-muted-foreground text-lg md:text-xl">
          Expert guidance to help your business navigate international markets, optimize logistics, and expand your
          global footprint.
        </p>
      </div>

      {/* Hero Section */}
      <div className="relative mb-20 overflow-hidden rounded-xl bg-gradient-to-r from-primary/20 to-primary/5 p-8 md:p-12">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
              Transform Your Business with Expert Consulting
            </h2>
            <p className="mt-4 text-muted-foreground">
              Our team of experienced consultants provides tailored solutions to help your business overcome challenges,
              identify opportunities, and achieve sustainable growth in the global market.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="#packages">View Packages</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/chat">Schedule Consultation</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="aspect-square w-full max-w-[400px] rounded-xl bg-muted flex items-center justify-center">
              <div className="text-muted-foreground">Consulting Service Illustration</div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Offered */}
      <div className="mb-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Consulting Services</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
            Comprehensive consulting solutions tailored to your specific business needs
          </p>
        </div>

        <Tabs defaultValue="logistics" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
            <TabsTrigger value="logistics">Logistics</TabsTrigger>
            <TabsTrigger value="market-entry">Market Entry</TabsTrigger>
            <TabsTrigger value="supply-chain">Supply Chain</TabsTrigger>
            <TabsTrigger value="business">Business Strategy</TabsTrigger>
          </TabsList>

          <TabsContent value="logistics" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Logistics Consulting</CardTitle>
                <CardDescription>
                  Optimize your shipping and logistics operations for maximum efficiency and cost savings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Route Optimization</h3>
                      <p className="text-sm text-muted-foreground">
                        Identify the most efficient shipping routes to reduce transit time and costs
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Carrier Selection</h3>
                      <p className="text-sm text-muted-foreground">
                        Evaluate and select the best carriers for your specific shipping needs
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Cost Reduction</h3>
                      <p className="text-sm text-muted-foreground">
                        Identify opportunities to reduce shipping costs without sacrificing service quality
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Customs Compliance</h3>
                      <p className="text-sm text-muted-foreground">
                        Ensure compliance with international customs regulations and documentation
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/chat">Request Logistics Consultation</Link>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="market-entry" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Market Entry Consulting</CardTitle>
                <CardDescription>
                  Strategic guidance for entering new international markets successfully
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Market Research</h3>
                      <p className="text-sm text-muted-foreground">
                        Comprehensive analysis of target markets, competitors, and consumer behavior
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Regulatory Compliance</h3>
                      <p className="text-sm text-muted-foreground">
                        Navigate complex regulatory environments and ensure legal compliance
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Partner Selection</h3>
                      <p className="text-sm text-muted-foreground">
                        Identify and evaluate potential local partners, distributors, and suppliers
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Go-to-Market Strategy</h3>
                      <p className="text-sm text-muted-foreground">
                        Develop effective strategies for product positioning, pricing, and distribution
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/chat">Request Market Entry Consultation</Link>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="supply-chain" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Supply Chain Consulting</CardTitle>
                <CardDescription>
                  Optimize your supply chain for resilience, efficiency, and sustainability
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Supply Chain Mapping</h3>
                      <p className="text-sm text-muted-foreground">
                        Comprehensive mapping and analysis of your entire supply chain
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Risk Assessment</h3>
                      <p className="text-sm text-muted-foreground">
                        Identify vulnerabilities and develop mitigation strategies
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Inventory Optimization</h3>
                      <p className="text-sm text-muted-foreground">
                        Balance inventory levels to minimize costs while meeting customer demands
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Sustainability Integration</h3>
                      <p className="text-sm text-muted-foreground">
                        Incorporate sustainable practices into your supply chain operations
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/chat">Request Supply Chain Consultation</Link>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="business" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Business Strategy Consulting</CardTitle>
                <CardDescription>
                  Comprehensive strategic guidance to drive growth and competitive advantage
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Strategic Planning</h3>
                      <p className="text-sm text-muted-foreground">
                        Develop clear, actionable business strategies aligned with your goals
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Growth Strategy</h3>
                      <p className="text-sm text-muted-foreground">
                        Identify opportunities for expansion and develop implementation plans
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Operational Excellence</h3>
                      <p className="text-sm text-muted-foreground">
                        Optimize business processes to improve efficiency and reduce costs
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Digital Transformation</h3>
                      <p className="text-sm text-muted-foreground">
                        Leverage technology to transform your business model and operations
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/chat">Request Business Strategy Consultation</Link>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Why Choose Us */}
      <div className="mb-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why Choose Our Consulting Services</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
            What sets our consulting services apart from the rest
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="border-none shadow-md">
            <CardHeader className="pb-2">
              <Users className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Expert Consultants</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our team consists of industry veterans with extensive experience in international business, logistics,
                and market development across Asia and beyond.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md">
            <CardHeader className="pb-2">
              <Lightbulb className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Tailored Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We don't believe in one-size-fits-all approaches. Every solution is customized to address your specific
                business challenges and objectives.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md">
            <CardHeader className="pb-2">
              <TrendingUp className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Results-Driven</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our success is measured by your success. We focus on delivering tangible results that drive growth and
                improve your bottom line.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md">
            <CardHeader className="pb-2">
              <Clock className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Timely Delivery</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We understand the importance of time in business. Our consulting projects are delivered on schedule
                without compromising on quality.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md md:col-span-2 lg:col-span-2">
            <CardHeader className="pb-2">
              <LineChart className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Comprehensive Approach</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We take a holistic view of your business, considering all aspects from operations to strategy, ensuring
                that our solutions address both immediate needs and long-term goals. Our team works closely with you at
                every step, providing clear communication and transparency throughout the consulting process.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Our Process */}
      <div className="mb-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Consulting Process</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
            A structured approach to delivering exceptional consulting services
          </p>
        </div>

        <div className="relative">
          {/* Process timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-muted md:left-1/2 md:-ml-0.5"></div>

          <div className="space-y-12">
            {/* Step 1 */}
            <div className="relative grid md:grid-cols-2">
              <div className="flex md:justify-end md:pr-12">
                <div className="max-w-md md:text-right">
                  <div className="mb-2 text-xl font-bold">1. Discovery & Assessment</div>
                  <p className="text-muted-foreground">
                    We begin by understanding your business, challenges, and objectives through in-depth discussions and
                    data analysis. This phase establishes the foundation for our consulting engagement.
                  </p>
                </div>
              </div>
              <div className="absolute left-4 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground md:left-1/2 md:-ml-4">
                1
              </div>
              <div className="mt-8 md:mt-0 md:pl-12"></div>
            </div>

            {/* Step 2 */}
            <div className="relative grid md:grid-cols-2">
              <div className="hidden md:block md:pr-12"></div>
              <div className="absolute left-4 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground md:left-1/2 md:-ml-4">
                2
              </div>
              <div className="mt-8 md:mt-0 md:pl-12">
                <div className="max-w-md">
                  <div className="mb-2 text-xl font-bold">2. Strategy Development</div>
                  <p className="text-muted-foreground">
                    Based on our assessment, we develop a tailored strategy and action plan to address your specific
                    needs. This includes clear objectives, timelines, and key performance indicators.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative grid md:grid-cols-2">
              <div className="flex md:justify-end md:pr-12">
                <div className="max-w-md md:text-right">
                  <div className="mb-2 text-xl font-bold">3. Implementation Support</div>
                  <p className="text-muted-foreground">
                    We don't just provide recommendations; we work alongside your team to implement solutions, providing
                    guidance, training, and support throughout the process.
                  </p>
                </div>
              </div>
              <div className="absolute left-4 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground md:left-1/2 md:-ml-4">
                3
              </div>
              <div className="mt-8 md:mt-0 md:pl-12"></div>
            </div>

            {/* Step 4 */}
            <div className="relative grid md:grid-cols-2">
              <div className="hidden md:block md:pr-12"></div>
              <div className="absolute left-4 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground md:left-1/2 md:-ml-4">
                4
              </div>
              <div className="mt-8 md:mt-0 md:pl-12">
                <div className="max-w-md">
                  <div className="mb-2 text-xl font-bold">4. Monitoring & Optimization</div>
                  <p className="text-muted-foreground">
                    We continuously monitor progress, measure results against KPIs, and make necessary adjustments to
                    ensure optimal outcomes and sustainable success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Consulting Packages */}
      <div id="packages" className="mb-20 scroll-mt-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Consulting Packages</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
            Flexible consulting options designed to meet your specific needs and budget
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <Card className="relative overflow-hidden border-muted">
            <div className="absolute inset-x-0 top-0 h-2 bg-muted"></div>
            <CardHeader>
              <CardTitle>Basic Package</CardTitle>
              <CardDescription>For small businesses and startups</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">$1,500</span>
                <span className="text-muted-foreground"> / project</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Initial business assessment</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Basic strategy recommendations</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>1 focus area (logistics or market entry)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>2 weeks of implementation support</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>1 follow-up consultation</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/chat">Get Started</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="relative overflow-hidden border-primary">
            <div className="absolute inset-x-0 top-0 h-2 bg-primary"></div>
            <CardHeader>
              <div className="absolute right-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                Popular
              </div>
              <CardTitle>Professional Package</CardTitle>
              <CardDescription>For growing businesses</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">$3,500</span>
                <span className="text-muted-foreground"> / project</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Comprehensive business assessment</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Detailed strategy & implementation plan</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>2 focus areas of your choice</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>1 month of implementation support</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Bi-weekly progress meetings</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>3 months of email support</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/chat">Get Started</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="relative overflow-hidden border-muted">
            <div className="absolute inset-x-0 top-0 h-2 bg-muted"></div>
            <CardHeader>
              <CardTitle>Enterprise Package</CardTitle>
              <CardDescription>For established businesses</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">$7,500</span>
                <span className="text-muted-foreground"> / project</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>In-depth business & market analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Comprehensive strategy development</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>All focus areas included</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>3 months of implementation support</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Weekly progress meetings</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>6 months of priority support</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Dedicated consultant</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/chat">Get Started</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground">Need a custom solution? Contact us for a tailored consulting package.</p>
          <Button asChild variant="outline" className="mt-4">
            <Link href="/chat">Request Custom Package</Link>
          </Button>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mb-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Client Success Stories</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
            See how our consulting services have helped businesses like yours
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="border-none bg-muted/50">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">AE</span>
                </div>
                <div>
                  <CardTitle className="text-base">Asia Exports Ltd.</CardTitle>
                  <CardDescription>Manufacturing</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="italic text-muted-foreground">
                "Myanmar Express hub's consulting team helped us optimize our supply chain, reducing shipping costs by
                22% and cutting delivery times by almost a week. Their expertise in international logistics was
                invaluable."
              </p>
            </CardContent>
          </Card>

          <Card className="border-none bg-muted/50">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">GT</span>
                </div>
                <div>
                  <CardTitle className="text-base">Global Tech Solutions</CardTitle>
                  <CardDescription>Technology</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="italic text-muted-foreground">
                "The market entry strategy developed by Myanmar Express hub's consultants was instrumental in our
                successful expansion into Southeast Asian markets. Their local knowledge and strategic guidance exceeded
                our expectations."
              </p>
            </CardContent>
          </Card>

          <Card className="border-none bg-muted/50">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">SF</span>
                </div>
                <div>
                  <CardTitle className="text-base">Sunrise Foods</CardTitle>
                  <CardDescription>Food & Beverage</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="italic text-muted-foreground">
                "Working with Myanmar Express hub transformed our business operations. Their consulting team identified
                critical inefficiencies in our logistics network and implemented solutions that improved our bottom line
                significantly."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-xl bg-gradient-to-r from-primary to-primary/80 p-8 text-center text-primary-foreground md:p-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to transform your business?</h2>
        <p className="mx-auto mt-4 max-w-[700px]">
          Schedule a free 30-minute consultation with one of our expert consultants to discuss your business challenges
          and how we can help you overcome them.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button asChild size="lg" variant="secondary">
            <Link href="/chat">Schedule Consultation</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
          >
            <Link href="/faq">Learn More</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
