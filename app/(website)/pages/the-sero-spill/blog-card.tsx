import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/data/blog-posts";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/pages/the-sero-spill/${post.slug}`}>
      <article className="group rounded-xl border-[1.5px] border-foreground p-4 bg-card shadow-[8px_8px_0_0_rgba(117,211,255,0.9)] overflow-hidden h-full flex flex-col">
        <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover rounded-2xl border-2 border-foreground "
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
