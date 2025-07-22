import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import { getTranslations } from 'next-intl/server';

const BLUR_FADE_DELAY = 0.04;

export default async function Page() {
  const t = await getTranslations('home');
  return (
    <main className="flex flex-col min-h-[100dvh]">
      <div className="section-container space-y-24 py-12">
      <section id="hero">
        <div className="mx-auto w-full max-w-4xl space-y-12">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex-1 space-y-6 text-center lg:text-left">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-4xl md:text-6xl lg:text-7xl font-mono font-bold tracking-tight leading-tight"
                yOffset={8}
                text={`${t('title')} ${t('subtitle')} ${DATA.name.split(" ")[0]}`}
              />
              <BlurFadeText
                className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed font-sans-body"
                delay={BLUR_FADE_DELAY}
                text={t('description')}
              />
              <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                  <Button asChild size="lg" className="h-12 px-8 text-base">
                    <Link href={`mailto:${DATA.contact.email}`}>
                      {t('hero.cta_primary')}
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base">
                    <Link href="#work">
                      {t('hero.cta_secondary')}
                    </Link>
                  </Button>
                </div>
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-2xl"></div>
                <Avatar className="relative size-32 lg:size-40 border-2 border-border/50">
                  <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                  <AvatarFallback className="text-2xl">{DATA.initials}</AvatarFallback>
                </Avatar>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">{t('aboutMe')}</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {t('aboutText')}
          </Markdown>
        </BlurFade>
      </section>
      <section id="stats">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
          {DATA.stats.map((stat, id) => (
            <BlurFade key={stat.label} delay={BLUR_FADE_DELAY * 5 + id * 0.05}>
              <Card className="text-center">
                <CardHeader className="pb-2">
                  <CardTitle className="text-4xl font-bold">{stat.number}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="work" className="py-20">
        <div className="space-y-12 w-full">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-mono font-bold tracking-tighter sm:text-5xl">
                {t('work')}
              </h2>
            </div>
          </BlurFade>
          <div className="space-y-8">
            {DATA.work.map((work, id) => (
              <BlurFade
                key={work.company}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <div className="flex items-start gap-6 p-6 rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition-all duration-300">
                  <Avatar className="size-16 border border-border bg-white flex-shrink-0">
                    <AvatarImage
                      src={work.logoUrl}
                      alt={work.company}
                      className="object-contain"
                    />
                    <AvatarFallback className="text-lg font-mono font-medium">
                      {work.company[0]}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1 min-w-0 space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1">
                        <h3 className="text-xl font-mono font-semibold">{work.company}</h3>
                        <p className="text-base text-muted-foreground font-sans-body">{work.title}</p>
                      </div>
                      <time className="text-sm text-muted-foreground font-sans-body font-medium whitespace-nowrap">
                        {work.start} - {work.end}
                      </time>
                    </div>

                    {work.badges && work.badges.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {work.badges.slice(0, 4).map((badge, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="text-xs px-3 py-1 bg-blue-100 text-blue-800 border-0 font-sans-body"
                          >
                            {badge}
                          </Badge>
                        ))}
                        {work.badges.length > 4 && (
                          <Badge variant="outline" className="text-xs px-3 py-1 bg-blue-100 text-blue-800 border-0 font-sans-body">
                            +{work.badges.length - 4} more
                          </Badge>
                        )}
                      </div>
                    )}

                    {work.description && (
                      <p className="text-sm text-muted-foreground leading-relaxed pt-2 font-sans-body">
                        {work.description}
                      </p>
                    )}
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="services" className="py-24">
        <div className="space-y-16 w-full">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-mono font-bold tracking-tight">
                {t('services.title')}
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed font-sans-body">
                {t('services.subtitle')}
              </p>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {DATA.services.map((service, id) => (
              <BlurFade
                key={service.title}
                delay={BLUR_FADE_DELAY * 10 + id * 0.05}
              >
                <Card className="h-full p-8 group hover:scale-[1.02] transition-all duration-300 bg-card border border-border shadow-sm">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="text-4xl flex-shrink-0">{service.icon}</div>
                      <div className="space-y-2 flex-1">
                        <h3 className="text-2xl font-mono font-bold">{service.title}</h3>
                        <p className="text-lg font-sans-body font-semibold text-primary">{service.price}</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed text-base font-sans-body">
                      {service.description}
                    </p>
                  </div>
                </Card>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <h2 className="text-xl font-mono font-bold">{t('skills')}</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-2">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 12 + id * 0.05}>
                <Badge key={skill} variant="outline" className="text-xs px-3 py-1 bg-blue-100 text-blue-800 border-0 font-sans-body">{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="testimonials">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 15}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-mono font-bold tracking-tighter sm:text-5xl">
                {t('testimonials.title')}
              </h2>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[800px] mx-auto">
            {DATA.testimonials.map((testimonial, id) => (
              <BlurFade
                key={testimonial.author}
                delay={BLUR_FADE_DELAY * 16 + id * 0.05}
              >
                <Card className="h-full bg-card border border-border shadow-sm">
                  <CardContent className="pt-6">
                    <blockquote className="space-y-2">
                      <p className="text-lg italic font-sans-body">&ldquo;{testimonial.quote}&rdquo;</p>
                      <footer className="text-sm text-muted-foreground font-sans-body">
                        — {testimonial.author}
                      </footer>
                    </blockquote>
                  </CardContent>
                </Card>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 17}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm font-sans-body">
                {t('contactMe')}
              </div>
              <h2 className="text-3xl font-mono font-bold tracking-tighter sm:text-5xl">
                {t('contactMe')}
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-sans-body">
                {t('contactSubtitle')}
              </p>
              <div className="pt-4">
                <Button asChild size="lg">
                  <Link href={`mailto:${DATA.contact.email}`}>
                    {t('contactCta')}
                  </Link>
                </Button>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
      </div>
    </main>
  );
}
