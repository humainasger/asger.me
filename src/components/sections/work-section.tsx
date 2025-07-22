import BlurFade from "@/components/magicui/blur-fade";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import { ANIMATION_CONFIG } from "@/config/constants";
import { useTranslations } from "next-intl";

interface WorkSectionProps {
  t: ReturnType<typeof useTranslations>;
}

export function WorkSection({ t }: WorkSectionProps) {
  const { BLUR_FADE_DELAY } = ANIMATION_CONFIG;

  return (
    <section id="work" className="py-20">
      <div className="space-y-12 w-full">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
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
              <div className="flex items-start gap-6 p-6 rounded-xl bg-card/30 border border-border/50 hover:bg-card/50 transition-all duration-300">
                <Avatar className="size-16 border border-border/50 bg-muted/50 flex-shrink-0">
                  <AvatarImage
                    src={work.logoUrl}
                    alt={work.company}
                    className="object-contain"
                  />
                  <AvatarFallback className="text-lg font-medium">
                    {work.company[0]}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1 min-w-0 space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <h3 className="text-xl font-semibold">{work.company}</h3>
                      <p className="text-base text-muted-foreground">{work.title}</p>
                    </div>
                    <time className="text-sm text-muted-foreground font-medium whitespace-nowrap">
                      {work.start} - {work.end}
                    </time>
                  </div>
                  
                  {work.badges && work.badges.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {work.badges.slice(0, 4).map((badge, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs px-3 py-1 bg-muted/30 border-border/50"
                        >
                          {badge}
                        </Badge>
                      ))}
                      {work.badges.length > 4 && (
                        <Badge variant="outline" className="text-xs px-3 py-1 bg-muted/30 border-border/50">
                          +{work.badges.length - 4} more
                        </Badge>
                      )}
                    </div>
                  )}
                  
                  {work.description && (
                    <p className="text-sm text-muted-foreground leading-relaxed pt-2">
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
  );
}
