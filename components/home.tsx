import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import logo from "./img.jpg";

export function Main() {
  return (
    <div className="flex pl-[80px] flex-col min-h-[100dvh]">
      <header className="w-full md:py-2 px-6 lg:py-15 xl:py-10 text-5xl font-bold">
        Bilim AI
      </header>
      <section className="w-full md:pb-24 lg:pb-32 xl:pb-48">
        <div className="container md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Ace to NIS and BIL high schools with our AI Tutor
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Personalized, adaptive tutoring to help you maximize your exam
                  score and get into your dream school.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Get Started
                </Link>
              </div>
            </div>
            <Image
              src={logo}
              width="550"
              height="550"
              alt="Hero"
              className="mx-auto rounded-md aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            <div className="flex flex-col items-start gap-2">
              <LightbulbIcon className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-bold">Adaptive Learning</h3>
              <p className="text-muted-foreground">
                Our AI-powered platform adapts to your strengths and weaknesses,
                providing personalized lessons and practice.
              </p>
            </div>
            <div className="flex flex-col items-start gap-2">
              <TrophyIcon className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-bold">Proven Results</h3>
              <p className="text-muted-foreground">
                Students who use our service see an average score increase of
                200 points on the exams.
              </p>
            </div>
            <div className="flex flex-col items-start gap-2">
              <HeadphonesIcon className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-bold">Expert Tutors</h3>
              <p className="text-muted-foreground">
                Our team of experienced, highly-qualified tutors are available
                24/7 to provide personalized support.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container grid items-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Get Started Today
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Sign up for our AI tutor service and start your journey to a
              higher score.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <form className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="max-w-lg flex-1"
              />
              <Button type="submit">Sign Up</Button>
            </form>
            <p className="text-xs text-muted-foreground">
              By signing up, you agree to our{" "}
              <Link
                href="#"
                className="underline underline-offset-2"
                prefetch={false}
              >
                Terms of Service
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function HeadphonesIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
    </svg>
  );
}

function LightbulbIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  );
}

function TrophyIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}
