"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

type Post = {
  id: string;
  imageUrl: string;
  postUrl: string | null;
  label: string | null;
  caption: string | null;
};

export function InstagramGrid({ posts }: { posts: Post[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
      {posts.map((post, index) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <a
            href={post.postUrl ?? "https://instagram.com/dyt_ezgievgin"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card className="group relative overflow-hidden border-2 border-transparent hover:border-[var(--brand-primary)] transition-all duration-300 cursor-pointer aspect-[4/5] md:aspect-square">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.imageUrl}
                alt={post.caption ?? post.label ?? "Instagram paylaşımı"}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
              />
            </Card>
          </a>
          {post.label && (
            <p className="mt-2 text-center text-xs font-medium text-muted-foreground">
              {post.label}
            </p>
          )}
        </motion.div>
      ))}
    </div>
  );
}
