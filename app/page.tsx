import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Check,
  Download,
  Eye,
  Share2,
  Shield,
  Smartphone,
  Bot,
  Star,
  Users,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Carousel } from "@/components/ui/carousel";

export default function TelestoryLanding() {
  // Define the carousel images
  const carouselImages = [
    "/carousel/ASO Screen GooglePlay EN 1.png",
    "/carousel/ASO Screen GooglePlay EN 2.png",
    "/carousel/ASO Screen GooglePlay EN 4.png",
    "/carousel/ASO Screen GooglePlay EN 5.png",
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center bg-white/80 backdrop-blur-md border-b border-blue-100">
        <Link href="/" className="flex items-center justify-center">
          <Bot className="h-8 w-8 text-blue-600" />
          <span className="ml-2 text-2xl font-bold text-gray-900">
            Telestory
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#features"
            className="text-sm font-medium hover:text-blue-600 transition-colors"
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="text-sm font-medium hover:text-blue-600 transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="#download"
            className="text-sm font-medium hover:text-blue-600 transition-colors"
          >
            Download
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-700"
                  >
                    <Bot className="w-4 h-4 mr-1" />
                    Telegram Bot + Mobile App
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    View & Download Telegram Stories
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    Telestory lets you watch and save Telegram stories. Access
                    any user's stories, save them for later, and share with
                    friends - all without revealing your identity.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="https://t.me/tele_story_bot">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                      <Bot className="mr-2 h-4 w-4" />
                      Start Telegram Bot
                    </Button>
                  </Link>
                  <Link href="https://play.google.com/store/apps/details?id=com.ddm.telestory&hl=en">
                    <Button variant="outline" size="lg">
                      <Download className="mr-2 h-4 w-4" />
                      Download App
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Carousel images={carouselImages} autoPlayInterval={4000} />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-white"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Powerful Features for Story Viewing
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Everything you need to view, save, and share Telegram stories
                  without anyone knowing.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Download className="h-12 w-12 text-blue-600 mb-2" />
                  <CardTitle>Save Stories</CardTitle>
                  <CardDescription>
                    Download and save both your own stories and others' stories
                    to your device for later viewing.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Eye className="h-12 w-12 text-blue-600 mb-2" />
                  <CardTitle>Anonymous Viewing</CardTitle>
                  <CardDescription>
                    Watch any Telegram user's stories completely anonymously
                    without them knowing you viewed it.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Share2 className="h-12 w-12 text-blue-600 mb-2" />
                  <CardTitle>Share with Friends</CardTitle>
                  <CardDescription>
                    Easily share any story with your friends and family through
                    various platforms.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Shield className="h-12 w-12 text-blue-600 mb-2" />
                  <CardTitle>Complete Privacy</CardTitle>
                  <CardDescription>
                    Your identity remains completely hidden. View stories
                    without leaving any traces.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Users className="h-12 w-12 text-blue-600 mb-2" />
                  <CardTitle>Any User Access</CardTitle>
                  <CardDescription>
                    Access stories from any Telegram user, whether they're in
                    your contacts or not.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Smartphone className="h-12 w-12 text-blue-600 mb-2" />
                  <CardTitle>Cross-Platform</CardTitle>
                  <CardDescription>
                    Available as both a Telegram bot and mobile app for iOS and
                    Android.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section
          id="pricing"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-indigo-100"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Choose Your Plan
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Start for free or upgrade to premium for unlimited access and
                  advanced features.
                </p>
              </div>
            </div>
            <div className="grid gap-6 mt-12 md:grid-cols-2 lg:gap-12 max-w-4xl mx-auto">
              {/* Free Plan */}
              <Card className="border-2 border-gray-200">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Free</CardTitle>
                  <div className="text-4xl font-bold">0 ₽</div>
                  <CardDescription>
                    Perfect for trying out Telestory
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span>5 story views per day</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span>Basic anonymous viewing</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span>Standard quality downloads</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span>Telegram bot access</span>
                    </li>
                  </ul>
                  <Link href="https://t.me/tele_story_bot">
                    <Button className="w-full" variant="outline">
                      Get Started Free
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Premium Plan */}
              <Card className="border-2 border-blue-500 relative">
                <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-blue-600">
                  <Star className="w-3 h-3 mr-1" />
                  Most Popular
                </Badge>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Premium</CardTitle>
                  <div className="text-4xl font-bold">149 ₽</div>
                  <CardDescription>per month</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span className="font-medium">Unlimited story views</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span>HD quality downloads</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span>Bulk download feature</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span>Mobile app access</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span>Priority support</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span>Advanced sharing options</span>
                    </li>
                    <li className="flex items-center">
                      <Zap className="h-4 w-4 text-yellow-500 mr-2" />
                      <span>No ads</span>
                    </li>
                  </ul>
                  <Link href="https://t.me/tele_story_bot?message=/premium">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Upgrade to Premium
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section
          id="download"
          className="w-full py-12 md:py-24 lg:py-32 bg-white"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Get Started Today
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose your preferred way to access Telestory - through our
                  Telegram bot or mobile app.
                </p>
              </div>
              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <Link href="https://t.me/tele_story_bot">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    <Bot className="mr-2 h-5 w-5" />
                    Open Telegram Bot
                  </Button>
                </Link>
                <Link href="https://play.google.com/store/apps/details?id=com.ddm.telestory&hl=en">
                  <Button size="lg" variant="outline">
                    <Download className="mr-2 h-5 w-5" />
                    Download from App Store
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Ready to View and Save Stories?
                </h2>
                <p className="max-w-[600px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of users who are already using Telestory to
                  view and save Telegram stories privately.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="https://t.me/tele_story_bot">
                  <Button size="lg" variant="secondary">
                    <Bot className="mr-2 h-4 w-4" />
                    Start Free Trial
                  </Button>
                </Link>
                <Link href="https://vc.ru/services/788468-v-telegram-poyavilsya-pervyi-bot-dlya-anonimnogo-prosmotra-stories">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-blue-600 border-white hover:bg-accent"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white">
        <p className="text-xs text-gray-500">
          © 2024 Telestory. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="/eula.txt"
            className="text-xs hover:underline underline-offset-4 text-gray-500"
          >
            Terms of Service
          </Link>
          <Link
            href="/eula.txt"
            className="text-xs hover:underline underline-offset-4 text-gray-500"
          >
            Privacy Policy
          </Link>
          <Link
            href="mailto:asimaranov@gmail.com"
            className="text-xs hover:underline underline-offset-4 text-gray-500"
          >
            Support
          </Link>
        </nav>
      </footer>
    </div>
  );
}
