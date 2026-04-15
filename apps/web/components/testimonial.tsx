"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@workspace/ui/components/avatar"
import { Card, CardContent } from "@workspace/ui/components/card"

type Testimonial = {
    name: string
    username: string
    role: string
    image: string
    quote: string
    verified?: boolean
    postImage?: string
    link?: string
}

const testimonials: Testimonial[] = [
    {
        name: 'Steven Tey',
        username: '@steventey',
        role: 'Founder',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=120&q=80',
        quote: 'bruh this is so good 😍',
        verified: true,
        link: '#',
    },
    {
        name: 'Guillermo Rauch',
        username: '@rauchg',
        role: 'CEO @ Vercel',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80',
        quote: 'beautiful site 🎨',
        verified: true,
        link: '#',
    },
    {
        name: 'Mckay Wrigley',
        username: '@mckaywrigley',
        role: 'Developer',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
        quote: 'Need a beautiful landing page? Use Cursor + Groot UI. Install components with 1-line of code and tag them with Cursor Composer to have AI do 100% of the work for you. Watch my workflow - it\'s this easy.',
        verified: true,
        postImage: 'https://res.cloudinary.com/dfjuuwtr6/image/upload/v1776210402/Groot-UI_Preview_lys0bz.png',
        link: '#',
    },
    {
        name: 'Alex',
        username: '@vahaah',
        role: 'Software Engineer',
        image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=120&q=80',
        quote: 'Thanks, @grootui. This is my new favourite UI library, and their Pro templates look magical.',
        verified: true,
        postImage: 'https://res.cloudinary.com/dfjuuwtr6/image/upload/v1774162392/Brain.2.png',
        link: '#',
    },
    {
        name: 'Sully',
        username: '@SullyOmarr',
        role: 'Developer',
        image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=120&q=80',
        quote: 'Bro these are cleeaaann',
        verified: true,
        postImage: 'https://res.cloudinary.com/dfjuuwtr6/image/upload/v1768510512/Screenshot_2026-01-16_021227_crgere.png',
        link: '#',
    },
    {
        name: 'Marc Klingen',
        username: '@marcklingen',
        role: 'CEO @ Langfuse',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&q=80',
        quote: 'grootui was a godsend when building the current langfuse.com x.com/marcklingen/st...',
        verified: true,
        postImage: 'https://res.cloudinary.com/dfjuuwtr6/image/upload/v1776268945/Screenshot_2026-04-15_213211_twnngd.png',
        link: '#',
    },
    {
        name: 'Aiden Bai',
        username: '@aidenybai',
        role: 'Software Engineer',
        image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=120&q=80',
        quote: 'we use grootui for million.dev 🤯',
        verified: true,
        link: '#',
    },
    {
        name: 'Jordan Hughes',
        username: '@jordanphughes',
        role: 'Designer',
        image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80',
        quote: 'This is awesome, congrats @grootui !',
        verified: true,
        link: '#',
    },
    {
        name: 'Dillion Verma',
        username: '@dillionverma',
        role: 'Software Engineer',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
        quote: "Testing out @grootui's new component blocks. The developer experience is just on another level.",
        verified: true,
        link: '#',
    },
    {
        name: 'Emily Wang',
        username: '@emilywang',
        role: 'Product Designer',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
        quote: 'Look at this clean UI! All built with @grootui in under an hour. Absolute game changer for my workflow.',
        verified: true,
        postImage: 'https://res.cloudinary.com/dfjuuwtr6/image/upload/v1776268852/Screenshot_2026-04-15_213026_qlofug.png',
        link: '#',
    },
    {
        name: 'Saurabh',
        username: '@saurabh',
        role: 'Indie Hacker',
        image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=120&q=80',
        quote: "Finally a UI library that doesn't feel bloated. @grootui is what I use for all my fast-shipping projects.",
        verified: true,
        link: '#',
    },
    {
        name: 'Lee Robinson',
        username: '@leeerob',
        role: 'VP Product @ Vercel',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&q=80',
        quote: 'The attention to detail in @grootui is impressive. Great collection for modern web apps.',
        verified: true,
        link: '#',
    }
]

const chunkArray = (array: Testimonial[], numChunks: number): Testimonial[][] => {
    const chunks: Testimonial[][] = Array.from({ length: numChunks }, () => [])
    array.forEach((item, index) => {
        chunks[index % numChunks]!.push(item)
    })
    return chunks
}

const testimonialChunks = chunkArray(testimonials, 4)

export function Testimonials() {
    return (
        <section className="py-16 md:py-24 overflow-hidden select-none border-b border-border/60">
            <div className="mx-auto max-w-7xl px-12">
                {/* Title */}
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-4xl font-medium tracking-tight sm:text-5xl">
                        Loved by the <span className="bg-brand-gradient bg-clip-text text-transparent">Community</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Build by makers, loved by thousands of developers around the globe.
                    </p>
                </div>
                {/* Testimonials */}
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {testimonialChunks.map((chunk, chunkIndex) => (
                        <div
                            key={chunkIndex}
                            className="space-y-3">
                            {chunk.map((testimonial, index) => (
                                <TestimonialCard key={index} testimonial={testimonial} />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
    return (
        <Card className="group relative rounded-xl overflow-hidden transition-all duration-500 border-border/50 bg-card hover:border-border/80">
            <CardContent className="p-4 transition-all duration-500">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <Avatar className="size-10 border border-border/50 shadow-sm">
                            <AvatarImage
                                alt={testimonial.name}
                                src={testimonial.image}
                            />
                            <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div className="min-w-0">
                            <div className="flex items-center gap-1.5">
                                <h3 className="font-bold text-[15px] leading-tight text-foreground truncate">
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
                                                fill="white"
                                                d="M10.5 15.5l-3.5-3.5 1.41-1.42L10.5 12.67l5.59-5.59L17.5 8.5l-7 7z" 
                                            />
                                        </svg>
                                    </div>
                                )}
                            </div>
                            <span className="text-muted-foreground block text-xs font-medium">
                                {testimonial.username}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                    <p className="text-foreground/90 text-[14.5px] leading-relaxed font-medium">
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
