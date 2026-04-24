import { Avatar, AvatarFallback, AvatarImage } from "@workspace/ui/components/avatar"
import { Card, CardContent } from "@workspace/ui/components/card"
import { Testimonial } from "@workspace/ui/lib/types"

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
    return (
        <Card className="group relative rounded-xl overflow-hidden transition-all duration-500 border-border/50 bg-card hover:border-border/80">
            <CardContent className="p-3 sm:p-4 transition-all duration-500">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 sm:gap-3">
                        <Avatar className="size-8 sm:size-10 border border-border/50 shadow-sm flex-none">
                            <AvatarImage
                                alt={testimonial.name}
                                src={testimonial.image}
                            />
                            <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div className="min-w-0">
                            <div className="flex items-center gap-1.5">
                                <h3 className="font-bold text-[13px] sm:text-[15px] leading-tight text-foreground truncate">
                                    {testimonial.name}
                                </h3>
                                {testimonial.verified && (
                                    <div className="flex-none size-4 flex items-center justify-center">
                                        <svg viewBox="0 0 24 24" className="size-full" xmlns="http://www.w3.org/2000/svg">
                                            <defs>
                                                <linearGradient id="verified-gradient" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="0%" stopColor="#f5f56b" />
                                                    <stop offset="100%" stopColor="#d41847" />
                                                </linearGradient>
                                            </defs>
                                            <path 
                                                fill="url(#verified-gradient)"
                                                d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34z" 
                                            />
                                            <path 
                                                fill="var(--background)"
                                                d="M10.5 15.5l-3.5-3.5 1.41-1.42L10.5 12.67l5.59-5.59L17.5 8.5l-7 7z" 
                                            />
                                        </svg>
                                    </div>
                                )}
                            </div>
                            <span className="text-muted-foreground hidden sm:block text-xs font-medium">
                                {testimonial.username}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                    <p className="text-foreground/90 text-[13px] sm:text-[14.5px] leading-relaxed font-medium">
                        {testimonial.quote.split(' ').map((word, i) => {
                            if (word.startsWith('@')) {
                                return <span key={i} className="bg-brand-gradient bg-clip-text text-transparent hover:underline cursor-pointer">{word} </span>
                            }
                            return word + ' '
                        })}
                    </p>

                    {testimonial.postImage && (
                        <div className="relative mt-4 overflow-hidden rounded-lg border border-border/50 aspect-video group/img">
                            <img 
                                src={testimonial.postImage} 
                                alt="Post content"
                                className="object-cover w-full h-full"
                            />
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    )
}