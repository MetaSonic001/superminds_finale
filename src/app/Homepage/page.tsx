import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, BarChart2, Brain, Clock, Search, Shield, Sparkles,Zap } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { ComparisonTable } from "@/components/comparison-table"
import { FadeIn } from "@/components/fade-in"
import { FadeUp } from "@/components/fade-up"
import { LogoCloud } from "@/components/logo-cloud"
import { TestimonialCard } from "@/components/testimonial-card"
import { VideoModal } from "@/components/video-modal"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Sparkles className="h-6 w-6" />
            <span className="font-bold">SparkAgency</span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:underline">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:underline">
              How it Works
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:underline">
              Pricing
            </Link>
            <Button variant="ghost" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Start Free Trial</Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-24 sm:py-32">
          <FadeIn>
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div className="flex flex-col items-start gap-4">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  Streamline Ad Research.
                  <br />
                  Create Campaigns That Convert.
                </h1>
                <p className="text-lg text-muted-foreground sm:text-xl">
                  SparkAgency automates your ad research by analyzing user pain points, competitor ads,
                  and market trends — all in one platform.
                </p>
                <div className="flex flex-col gap-3 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                    <Link href="/signup">
                      Start Free Trial
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline">
                    Book a Demo
                  </Button>
                </div>
              </div>
              <div className="relative mx-auto aspect-video w-full max-w-xl lg:mx-0">
                <Image
                  src="/placeholder.svg?height=720&width=1280"
                  alt="SparkAgency Dashboard"
                  className="rounded-xl shadow-2xl"
                  width={1280}
                  height={720}
                  priority
                />
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Stats Section */}
        <section className="container py-14 sm:py-20">
          <FadeUp>
            <div className="grid gap-8 rounded-xl border bg-card p-8 md:grid-cols-3">
              <div className="flex flex-col items-center justify-center text-center">
                <div className="text-3xl font-bold md:text-4xl">85%</div>
                <p className="text-sm text-muted-foreground">Improved Ad Performance</p>
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <div className="text-3xl font-bold md:text-4xl">20+ hrs</div>
                <p className="text-sm text-muted-foreground">Saved Per Campaign</p>
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <div className="text-3xl font-bold md:text-4xl">10k+</div>
                <p className="text-sm text-muted-foreground">Active Users</p>
              </div>
            </div>
          </FadeUp>
        </section>

        {/* Logo Cloud */}
        <section className="container py-14 sm:py-20">
          <FadeUp>
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Trusted by Leading Brands and Agencies
              </h2>
              <p className="max-w-[85%] text-muted-foreground">
                Join over 1,000+ marketers and agencies already using SparkAgency
              </p>
            </div>
            <div className="mx-auto mt-10 max-w-5xl">
              <LogoCloud />
            </div>
          </FadeUp>
        </section>

        {/* Why Choose Us Section */}
        <section id="features" className="container py-14 sm:py-20">
          <FadeUp>
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">Why Choose SparkAgency?</h2>
              <p className="max-w-[85%] text-muted-foreground">
                Powerful features to help you create data-driven, high-converting ad campaigns
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-14 sm:grid-cols-2 md:grid-cols-3">
              <Card>
                <CardContent className="flex flex-col items-center gap-3 p-6">
                  <Search className="h-10 w-10 text-primary" />
                  <h3 className="text-center text-xl font-bold">Research Automation</h3>
                  <p className="text-center text-sm text-muted-foreground">
                    Analyze blogs, forums, app reviews, and competitor ads effortlessly
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center gap-3 p-6">
                  <Brain className="h-10 w-10 text-primary" />
                  <h3 className="text-center text-xl font-bold">Sentiment Analysis</h3>
                  <p className="text-center text-sm text-muted-foreground">
                    Identify what drives your audience through advanced AI insights
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center gap-3 p-6">
                  <BarChart2 className="h-10 w-10 text-primary" />
                  <h3 className="text-center text-xl font-bold">Competitor Analysis</h3>
                  <p className="text-center text-sm text-muted-foreground">
                    Get detailed insights into competitor strategies and performance
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center gap-3 p-6">
                  <Zap className="h-10 w-10 text-primary" />
                  <h3 className="text-center text-xl font-bold">Quick Insights</h3>
                  <p className="text-center text-sm text-muted-foreground">
                    Access actionable insights and recommendations instantly
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center gap-3 p-6">
                  <Clock className="h-10 w-10 text-primary" />
                  <h3 className="text-center text-xl font-bold">Time Saving</h3>
                  <p className="text-center text-sm text-muted-foreground">
                    Cut research time by up to 80% with automated analysis
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center gap-3 p-6">
                  <Shield className="h-10 w-10 text-primary" />
                  <h3 className="text-center text-xl font-bold">Data Security</h3>
                  <p className="text-center text-sm text-muted-foreground">
                    Enterprise-grade security for your research and insights
                  </p>
                </CardContent>
              </Card>
            </div>
          </FadeUp>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="bg-muted/50">
          <div className="container py-14 sm:py-20">
            <FadeUp>
              <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                <h2 className="text-3xl font-bold sm:text-4xl">How It Works</h2>
                <p className="max-w-[85%] text-muted-foreground">
                  Get started with SparkAgency in three simple steps
                </p>
              </div>
              <div className="mx-auto mt-8 grid max-w-5xl gap-8 sm:grid-cols-3">
                <div className="relative flex flex-col items-center gap-4 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-foreground">
                    1
                  </div>
                  <h3 className="text-xl font-bold">Input Your Topic</h3>
                  <p className="text-sm text-muted-foreground">
                    Select your industry, add custom keywords, and list competitors
                  </p>
                </div>
                <div className="relative flex flex-col items-center gap-4 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-foreground">
                    2
                  </div>
                  <h3 className="text-xl font-bold">Automated Analysis</h3>
                  <p className="text-sm text-muted-foreground">
                    Our AI gathers and analyzes data from multiple sources
                  </p>
                </div>
                <div className="relative flex flex-col items-center gap-4 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-foreground">
                    3
                  </div>
                  <h3 className="text-xl font-bold">Get Insights</h3>
                  <p className="text-sm text-muted-foreground">
                    View insights and recommendations on your interactive dashboard
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="container py-14 sm:py-20">
          <FadeUp>
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">Trusted by Marketers</h2>
              <p className="max-w-[85%] text-muted-foreground">
                See what our customers have to say about SparkAgency
              </p>
            </div>
            <div className="mx-auto mt-8 grid max-w-5xl gap-8 sm:grid-cols-2 md:grid-cols-3">
              <TestimonialCard
                quote="SparkAgency has transformed our ad research process. We've seen a 40% improvement in campaign performance since using the platform."
                author="Sarah Johnson"
                role="Marketing Director"
                company="TechCo"
              />
              <TestimonialCard
                quote="The insights we get from SparkAgency are invaluable. It's like having a team of expert researchers at your fingertips."
                author="Michael Chen"
                role="Digital Marketing Manager"
                company="E-commerce Solutions"
              />
              <TestimonialCard
                quote="SparkAgency has become an indispensable tool for our agency. It's helped us deliver better results for our clients in less time."
                author="Emily Rodriguez"
                role="Account Director"
                company="AdGenius Agency"
              />
            </div>
          </FadeUp>
        </section>

        {/* Video Demo Section */}
        <section className="bg-muted/50">
          <div className="container py-14 sm:py-20">
            <FadeUp>
              <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                <h2 className="text-3xl font-bold sm:text-4xl">See SparkAgency in Action</h2>
                <p className="max-w-[85%] text-muted-foreground">
                  Watch how SparkAgency automates ad research, analyzes competitors, and delivers insights
                  in just a few clicks
                </p>
              </div>
              <div className="mx-auto mt-10 max-w-4xl">
                <VideoModal />
              </div>
            </FadeUp>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="container py-14 sm:py-20">
          <FadeUp>
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">Simple, Transparent Pricing</h2>
              <p className="max-w-[85%] text-muted-foreground">
                Choose the plan thats right for your business
              </p>
            </div>
            <div className="mx-auto mt-8 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Starter Plan */}
              <Card>
                <CardContent className="flex flex-col gap-6 p-6">
                  <div>
                    <h3 className="text-2xl font-bold">Starter</h3>
                    <p className="text-sm text-muted-foreground">Perfect for individuals</p>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold">$49</span>
                    <span className="text-sm text-muted-foreground">/month</span>
                  </div>
                  <ul className="grid gap-3 text-sm">
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>5 Research Projects</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Basic Analytics</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Email Support</span>
                    </li>
                  </ul>
                  <Button className="w-full" asChild>
                    <Link href="/signup">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Pro Plan */}
              <Card className="relative border-primary">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Popular
                </div>
                <CardContent className="flex flex-col gap-6 p-6">
                  <div>
                    <h3 className="text-2xl font-bold">Pro</h3>
                    <p className="text-sm text-muted-foreground">Perfect for small teams</p>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold">$99</span>
                    <span className="text-sm text-muted-foreground">/month</span>
                  </div>
                  <ul className="grid gap-3 text-sm">
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Unlimited Projects</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Advanced Analytics</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Priority Support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Team Collaboration</span>
                    </li>
                  </ul>
                  <Button className="w-full" asChild>
                    <Link href="/signup">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Enterprise Plan */}
              <Card>
                <CardContent className="flex flex-col gap-6 p-6">
                  <div>
                    <h3 className="text-2xl font-bold">Enterprise</h3>
                    <p className="text-sm text-muted-foreground">Perfect for large teams</p>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold">Custom</span>
                  </div>
                  <ul className="grid gap-3 text-sm">
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Custom Integration</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Dedicated Support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Custom Features</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/contact">Contact Sales</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </FadeUp>
        </section>

        {/* Comparison Table Section */}
        <section className="bg-muted/50">
          <div className="container py-14 sm:py-20">
            <FadeUp>
              <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                <h2 className="text-3xl font-bold sm:text-4xl">How Does SparkAgency Compare?</h2>
                <p className="max-w-[85%] text-muted-foreground">
                  See how we stack up against the competition
                </p>
              </div>
              <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-xl border bg-background">
                <ComparisonTable />
              </div>
            </FadeUp>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-muted/50">
          <div className="container py-14 sm:py-20">
            <FadeUp>
              <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                <h2 className="text-3xl font-bold sm:text-4xl">
                  Ready to Transform Your Ad Research?
                </h2>
                <p className="max-w-[85%] text-muted-foreground">
                  Join thousands of marketers who have already improved their campaign performance with
                  SparkAgency
                </p>
                <div className="flex flex-col gap-3 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                    <Link href="/signup">Start Free Trial</Link>
                  </Button>
                  <Button size="lg" variant="outline">
                    Schedule Demo
                  </Button>
                </div>
              </div>
            </FadeUp>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container flex flex-col gap-8 py-8 md:flex-row md:py-12">
          <div className="flex flex-col gap-4 md:w-1/3">
            <Link href="/" className="flex items-center space-x-2">
              <Sparkles className="h-6 w-6" />
              <span className="font-bold">SparkAgency</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Streamline your ad research process and create campaigns that convert with AI-powered
              insights.
            </p>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3">
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-medium">Product</h3>
              <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#features">Features</Link>
                </li>
                <li>
                  <Link href="#pricing">Pricing</Link>
                </li>
                <li>
                  <Link href="/changelog">Changelog</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-medium">Company</h3>
              <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/careers">Careers</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-medium">Legal</h3>
              <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/privacy">Privacy</Link>
                </li>
                <li>
                  <Link href="/terms">Terms</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t">
          <div className="container flex flex-col items-center justify-between gap-4 py-6 md:h-24 md:flex-row md:py-0">
            <div className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              Built by{" "}
              <a href="#" className="font-medium underline underline-offset-4">
                SparkAgency
              </a>
              . The source code is available on{" "}
              <a href="#" className="font-medium underline underline-offset-4">
                GitHub
              </a>
              .
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

