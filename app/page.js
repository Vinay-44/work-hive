import ComanyCarousel from "@/components/ComanyCarousel";
import Section from "@/components/Section";
import { AccordionContent, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Divider from "@/components/ui/Divider";
import { Accordion, AccordionItem } from "@radix-ui/react-accordion";
import { ArrowBigRight, BarChart, Calendar, ChevronRight, CircleChevronRight, Layout } from "lucide-react";
import Link from "next/link";
import faqs from "../staticData/faqs.json";
const features = [
  {
    title: "Intuitive Kanban Boards",
    description:
      "Visualize your workflow and optimize team productivity with our easy-to-use Kanban boards.",
    icon: Layout,
  },
  {
    title: "Powerful Sprint Planning",
    description:
      "Plan and manage sprints effectively, ensuring your team stays focused on delivering value.",
    icon: Calendar,
  },
  {
    title: "Comprehensive Reporting",
    description:
      "Gain insights into your team's performance with detailed, customizable reports and analytics.",
    icon: BarChart,
  },
];
export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="container mx-auto py-20 px-4 text-center">
        <h1 className="text-6xl whitespace-pre-line sm:text-7xl lg:text-8xl font-extrabold gradient-title pb-6 flex flex-col">
          Connected To Work
        </h1>
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold gradient-title pb-6">
          With <span className="text-blue-400">Work</span>{" "}
          <span className="text-white">Hive</span>
        </h1>
        <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
          Empower Your Team With Our Intitutive Project Management System.
        </p>
        <Link href="/onboarding">
          <Button size="lg" className="mr-4">
            Get Started <ChevronRight size={18} className="ml-1" />
          </Button>
        </Link>

        <Link href="#features">
          <Button size="lg" variant="outline" className="mr-4">
            Learn More
          </Button>
        </Link>
      </section>
      <Section title={"Key Features"}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature,ind) => (
            <Card key={ind} className="bg-gray-800">
              <CardContent className="pt-6">
                <feature.icon className="h-12 w-12 mb-4 text-blue-300" />
                <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                <p className="text-gray-300">{feature.description}</p>
              </CardContent>
            </Card>
            ))}
          </div>
      </Section>
      <Divider/>
      <Section isTrasparent={true} title={"Trusted by Top Companies"}>
        <ComanyCarousel/>
      </Section>
      <Divider/>
      <Section title={"Frequently Asked Questions"}>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-xl">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-lg">
                <p>{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>
          <Divider/>
      <Section title={"Want to Transform the Way You Work Together?"} isTrasparent={true}>
        <div className="flex flex-col gap-y-5 items-center justify-center relative">
        <h3 className="text-center text-lg absolute -top-10">
          Join Thousands of Users and Experts in the <span className="text-blue-400">Work</span> Hive Community Today!
        </h3>
        <Link href={"/onboarding"} className="mt-2">
          <Button className="animate-bounce duration-1000">
            Start For Free <ArrowBigRight size={18}/>
          </Button>
        </Link>

        </div>
      </Section>
    </div>
  );
}
