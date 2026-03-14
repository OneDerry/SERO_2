import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/data/blog-posts";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/pages/the-sero-spill/${post.slug}`}>
      <article className="group rounded-xl border-[1.5px] border-foreground bg-card shadow-[4px_5px_0_0_rgba(59,130,246,0.3)] hover:shadow-[2px_3px_0_0_rgba(59,130,246,0.2)] transition-shadow duration-200 overflow-hidden h-full flex flex-col">
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-5 flex flex-col flex-1 text-center">
          <h2 className="text-lg font-extrabold text-foreground leading-tight">
            {post.title}
          </h2>
          <p className="text-sm text-muted-foreground mt-2">{post.date}</p>
          <p className="text-sm text-muted-foreground mt-3 leading-relaxed line-clamp-4">
            {post.excerpt}
          </p>
        </div>
      </article>
    </Link>
  );
}
