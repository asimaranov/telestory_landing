import { useTranslations } from "next-intl";
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
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export default function TelestoryLanding() {
  const t = useTranslations();

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
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <Link
            href="#features"
            className="text-sm font-medium hover:text-blue-600 transition-colors hidden sm:block"
          >
            {t("header.features")}
          </Link>
          <Link
            href="#pricing"
            className="text-sm font-medium hover:text-blue-600 transition-colors"
          >
            {t("header.pricing")}
          </Link>
          <Link
            href="#download"
            className="text-sm font-medium hover:text-blue-600 transition-colors"
          >
            {t("header.download")}
          </Link>
          <LanguageSwitcher />
        </nav>
      </header>

      <main className="flex-1">
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
                    {t("hero.badge")}
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    {t("hero.title")}
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    {t("hero.description")}
                  </p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Link
                    href="https://t.me/tele_story_bot?start=landing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                      <Bot className="mr-2 h-4 w-4" />
                      {t("hero.startBot")}
                    </Button>
                  </Link>
                  <Link
                    href="https://play.google.com/store/apps/details?id=com.ddm.telestory"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="lg">
                      <Download className="mr-2 h-4 w-4" />
                      {t("hero.downloadApp")}
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
                  {t("features.title")}
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("features.subtitle")}
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Download className="h-12 w-12 text-blue-600 mb-2" />
                  <CardTitle>{t("features.saveStories.title")}</CardTitle>
                  <CardDescription>
                    {t("features.saveStories.description")}
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Eye className="h-12 w-12 text-blue-600 mb-2" />
                  <CardTitle>{t("features.anonymousViewing.title")}</CardTitle>
                  <CardDescription>
                    {t("features.anonymousViewing.description")}
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Share2 className="h-12 w-12 text-blue-600 mb-2" />
                  <CardTitle>{t("features.shareWithFriends.title")}</CardTitle>
                  <CardDescription>
                    {t("features.shareWithFriends.description")}
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Shield className="h-12 w-12 text-blue-600 mb-2" />
                  <CardTitle>{t("features.completePrivacy.title")}</CardTitle>
                  <CardDescription>
                    {t("features.completePrivacy.description")}
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Users className="h-12 w-12 text-blue-600 mb-2" />
                  <CardTitle>{t("features.anyUserAccess.title")}</CardTitle>
                  <CardDescription>
                    {t("features.anyUserAccess.description")}
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Smartphone className="h-12 w-12 text-blue-600 mb-2" />
                  <CardTitle>{t("features.crossPlatform.title")}</CardTitle>
                  <CardDescription>
                    {t("features.crossPlatform.description")}
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
                  {t("pricing.title")}
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("pricing.subtitle")}
                </p>
              </div>
            </div>
            <div className="grid gap-6 mt-12 md:grid-cols-2 lg:gap-12 max-w-4xl mx-auto">
              {/* Free Plan */}
              <Card className="border-2 border-gray-200 flex flex-col">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">
                    {t("pricing.free.name")}
                  </CardTitle>
                  <div className="text-4xl font-bold">
                    {t("pricing.free.price")}
                  </div>
                  <CardDescription>
                    {t("pricing.free.description")}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col grow space-y-4 gap-2">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span>{t("pricing.free.features.views")}</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span>{t("pricing.free.features.downloads")}</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span>{t("pricing.free.features.anonymous")}</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span>{t("pricing.free.features.bot")}</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span>{t("pricing.free.features.app")}</span>
                    </li>
                  </ul>
                  <Link
                    href="https://t.me/tele_story_bot?start=landing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sm:!mt-auto"
                  >
                    <Button className="w-full" variant="outline">
                      {t("pricing.free.button")}
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Premium Plan */}
              <Card className="border-2 border-blue-500 relative">
                <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-blue-600">
                  <Star className="w-3 h-3 mr-1" />
                  {t("pricing.premium.badge")}
                </Badge>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">
                    {t("pricing.premium.name")}
                  </CardTitle>
                  <div className="text-4xl font-bold">
                    {t("pricing.premium.price")}
                  </div>
                  <CardDescription>
                    {t("pricing.premium.period")}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 flex flex-col gap-2">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span className="font-medium">
                        {t("pricing.premium.features.free")}
                      </span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span className="font-medium">
                        {t("pricing.premium.features.unlimited")}
                      </span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span>{t("pricing.premium.features.hd")}</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span>{t("pricing.premium.features.anonymous")}</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span>{t("pricing.premium.features.support")}</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span>{t("pricing.premium.features.sharing")}</span>
                    </li>
                    <li className="flex items-center">
                      <Zap className="h-4 w-4 text-green-500 mr-2" />
                      <span>{t("pricing.premium.features.noAds")}</span>
                    </li>
                  </ul>
                  <Link
                    href="https://t.me/tele_story_bot?start=premium"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=""
                  >
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      {t("pricing.premium.button")}
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
                  {t("download.title")}
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("download.subtitle")}
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="https://t.me/tele_story_bot?start=landing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    <Bot className="mr-2 h-5 w-5" />
                    {t("download.openBot")}
                  </Button>
                </Link>
                <Link
                  href="https://telestory.taplink.ws"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="hidden sm:flex"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    {t("download.googlePlay")}
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="flex sm:hidden"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    {t("download.googlePlayShort")}
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
              <div className="flex flex-col space-y-2 text-center items-center justify-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  {t("cta.title")}
                </h2>
                <p className="max-w-[600px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("cta.subtitle")}
                </p>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Link
                  href="https://t.me/tele_story_bot?start=landing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" variant="secondary" className="mt-auto">
                    <Bot className="mr-2 h-4 w-4" />
                    {t("cta.startTrial")}
                  </Button>
                </Link>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://vc.ru/services/788468-v-telegram-poyavilsya-pervyi-bot-dlya-anonimnogo-prosmotra-stories"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-blue-600 border-white hover:bg-accent"
                  >
                    {t("cta.learnMore")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white">
        <p className="text-xs text-gray-500">{t("footer.copyright")}</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="/eula.txt"
            className="text-xs hover:underline underline-offset-4 text-gray-500"
          >
            {t("footer.terms")}
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="/eula.txt"
            className="text-xs hover:underline underline-offset-4 text-gray-500"
          >
            {t("footer.privacy")}
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:support@telestory.net"
            className="text-xs hover:underline underline-offset-4 text-gray-500"
          >
            {t("footer.support")}
          </Link>
        </nav>
      </footer>
    </div>
  );
}
