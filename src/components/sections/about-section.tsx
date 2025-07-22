import BlurFade from "@/components/magicui/blur-fade";
import { ANIMATION_CONFIG } from "@/config/constants";
import Markdown from "react-markdown";
import { useTranslations } from "next-intl";

interface AboutSectionProps {
  t: ReturnType<typeof useTranslations>;
}

export function AboutSection({ t }: AboutSectionProps) {
  const { BLUR_FADE_DELAY } = ANIMATION_CONFIG;

  return (
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
  );
}
