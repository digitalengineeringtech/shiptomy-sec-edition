import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FAQPage() {
  return (
    <div className="container max-sm:px-10 mx-auto py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h1>
        <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
          Find answers to common questions about our services.
        </p>
      </div>

      <div className="mx-auto max-w-3xl">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>How does Myanmar Express Hub work?</AccordionTrigger>
            <AccordionContent>
              Myanmar Express Hub provides international shopping and shipping services. We offer three main services:
              Buy For Me (we purchase products on your behalf), Buy From Other (we help you purchase from third-party
              sellers), and Ship for me (we provide international shipping for your packages). You can register on our
              platform, submit requests, and we'll handle the rest.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>What countries do you ship from?</AccordionTrigger>
            <AccordionContent>
              We currently provide shipping services from the United States, United Kingdom, Japan, Thailand, Singapore,
              South Korea, Australia, and Germany. We're continuously expanding our network to include more countries.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>How much does shipping cost?</AccordionTrigger>
            <AccordionContent>
              Shipping costs vary based on the weight, dimensions, and origin country of your package. We offer
              competitive rates starting from $8 for small packages from Thailand to Myanmar. You can find our estimated
              shipping rates on our Ship for me service page or contact us for a specific quote.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>How long does shipping take?</AccordionTrigger>
            <AccordionContent>
              Shipping times vary depending on the origin country and shipping method. Typically, packages from Thailand
              take 3-5 business days, from Japan and Singapore 5-7 business days, and from the US, UK, and Europe 7-14
              business days. These are estimates and actual delivery times may vary.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>What is the Buy For Me service?</AccordionTrigger>
            <AccordionContent>
              Our Buy For Me service allows you to purchase products from international retailers that don't ship to
              Myanmar. You submit a request with the product details, we provide a quote, and after your payment, we
              purchase the product and ship it to your address in Myanmar. This service includes product verification
              and customs clearance.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>What is the Buy From Other service?</AccordionTrigger>
            <AccordionContent>
              Our Buy From Other service helps you purchase products from third-party sellers and international
              marketplaces. We verify the seller's reputation and product authenticity before proceeding with the
              purchase. This service is ideal for shopping on platforms like Amazon, eBay, Alibaba, Taobao, and other
              marketplaces.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>How do I track my package?</AccordionTrigger>
            <AccordionContent>
              Once your package is shipped, you'll receive a tracking number and link to track your package in
              real-time. You can also log in to your account on our platform to view the status and location of your
              package throughout the shipping process.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger>What if my package is lost or damaged?</AccordionTrigger>
            <AccordionContent>
              All packages shipped through Myanmar Express Hub are insured against loss or damage during transit. If
              your package is lost or damaged, please contact our customer service team immediately. We'll file a claim
              and work to resolve the issue as quickly as possible.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-9">
            <AccordionTrigger>How do I pay for your services?</AccordionTrigger>
            <AccordionContent>
              We accept various payment methods including bank transfers, mobile banking, and international payment
              platforms. The available payment options will be displayed during the checkout process. All payments are
              secure and protected.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-10">
            <AccordionTrigger>Can you ship restricted items?</AccordionTrigger>
            <AccordionContent>
              We cannot ship items that are restricted or prohibited by law in Myanmar or the origin country. This
              includes but is not limited to weapons, illegal drugs, hazardous materials, and counterfeit goods. Please
              check our Terms & Conditions page for a complete list of restricted items.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-11">
            <AccordionTrigger>Do you handle customs clearance?</AccordionTrigger>
            <AccordionContent>
              Yes, we handle all customs documentation and import procedures for your packages. However, you are
              responsible for any import duties, taxes, or fees imposed by Myanmar customs. These charges are not
              included in our shipping rates and will be billed separately if applicable.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-12">
            <AccordionTrigger>Can I consolidate multiple packages?</AccordionTrigger>
            <AccordionContent>
              Yes, we offer package consolidation services. If you have multiple packages arriving at our warehouse, we
              can combine them into one shipment to save on shipping costs. You can request consolidation through your
              account dashboard or by contacting our customer service team.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="mt-12 text-center">
          <p className="mb-6 text-muted-foreground">
            Didn't find the answer you're looking for? Contact our support team.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary hover:scale-105 active:scale-95 duration-200">
            <Link href="/chat">Chat With Us</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
