import BlurFade from "@/components/magicui/blur-fade";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DATA } from "@/data/resume";
import { ANIMATION_CONFIG } from "@/config/constants";

export function StatsSection() {
  const { BLUR_FADE_DELAY } = ANIMATION_CONFIG;

  return (
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
  );
}
