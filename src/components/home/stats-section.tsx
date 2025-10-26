"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, TrendingUp, Clock } from "lucide-react";

interface Stat {
  icon: React.ReactNode;
  value: string;
  label: string;
  suffix?: string;
  countTo?: number;
}

const stats: Stat[] = [
  {
    icon: <Users className="w-8 h-8" />,
    value: "1000+",
    label: "Mutlu Danışan",
    countTo: 1000,
    suffix: "+",
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    value: "%95",
    label: "Başarı Oranı",
    countTo: 95,
    suffix: "%",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    value: "7/24",
    label: "Online Destek",
  },
];

function CounterAnimation({
  end,
  suffix = "",
  duration = 2000,
}: {
  end: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView || hasAnimated) return;

    setHasAnimated(true);
    const startTime = Date.now();
    const step = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(easeOutQuart * end);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, end, duration, hasAnimated]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold">
      {count}
      {suffix}
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="py-16 -mt-20 relative z-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Glassmorphism Card */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center space-y-4"
                >
                  {/* Icon */}
                  <div className="flex justify-center">
                    <div className="p-4 bg-gradient-to-br from-[var(--brand-primary)]/10 to-[var(--brand-secondary)]/10 rounded-2xl text-[var(--brand-primary)]">
                      {stat.icon}
                    </div>
                  </div>

                  {/* Value with Counter Animation */}
                  <div className="bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] bg-clip-text text-transparent">
                    {stat.countTo !== undefined ? (
                      <CounterAnimation
                        end={stat.countTo}
                        suffix={stat.suffix}
                      />
                    ) : (
                      <div className="text-4xl md:text-5xl font-bold">
                        {stat.value}
                      </div>
                    )}
                  </div>

                  {/* Label */}
                  <div className="text-base md:text-lg text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
