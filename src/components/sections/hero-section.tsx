import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import { ANIMATION_CONFIG } from "@/config/constants";
import Link from "next/link";
import { useTranslations } from "next-intl";

interface HeroSectionProps {
  t: ReturnType<typeof useTranslations>;
}

export function HeroSection({ t }: HeroSectionProps) {
  const { BLUR_FADE_DELAY } = ANIMATION_CONFIG;

  return (
    <section id="hero">
      <div className="mx-auto w-full max-w-4xl space-y-12">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <BlurFadeText
              delay={BLUR_FADE_DELAY}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
              yOffset={8}
              text={`${t('title')} ${t('subtitle')} ${DATA.name.split(" ")[0]}`}
            />
            <BlurFadeText
              className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
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
  );
}
