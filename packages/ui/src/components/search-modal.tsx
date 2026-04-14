"use client";

import React from 'react';
import {
	Modal,
	ModalContent,
	ModalTitle,
	ModalTrigger,
} from '@workspace/ui/components/modal';
import { Button } from '@workspace/ui/components/button';
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from '@workspace/ui/components/command';

import { LucideIcon, SearchIcon } from 'lucide-react';
import { cn } from '@workspace/ui/lib/utils';

export type CommandItemProps = {
	id: string;
	title: string;
	description: string;
	category: string;
	icon?: LucideIcon;
	shortcut?: string;
};

type SearchModalProps = {
	children: React.ReactNode;
	data: CommandItemProps[];
};


export function SearchModal({ children, data }: SearchModalProps) {
	const [open, setOpen] = React.useState(false);
	const [query, setQuery] = React.useState('');

	React.useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
	 		if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				setOpen((open) => !open);
			}
		};
		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, []);

	return (
		<Modal open={open} onOpenChange={setOpen}>
			<ModalTrigger asChild>
				<div onClick={() => setOpen(true)}>
					{children}
				</div>
			</ModalTrigger>
			<ModalContent className="p-1">
				<ModalTitle className="sr-only">Search</ModalTitle>
				<Command className="bg-background md:bg-card rounded-md md:border">
					<CommandInput
						className={cn(
							'placeholder:text-muted-foreground flex h-12 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50',
						)}
						placeholder="Search..."
						value={query}
						onValueChange={setQuery}
					/>
					<CommandList className="max-h-[380px] min-h-[380px] px-2 md:px-0">
						<CommandEmpty className="flex min-h-[280px] flex-col items-center justify-center">
							<SearchIcon className="text-muted-foreground mb-2 size-6" />
							<p className="text-muted-foreground mb-1 text-xs">
								No commands found for "{query}"
							</p>
							<Button onClick={() => setQuery('')} variant="ghost">
								Clear search
							</Button>
						</CommandEmpty>
						<CommandGroup>
							{data.map((item, i) => {
								return (
									<CommandItem
										key={i}
										className="flex cursor-pointer items-center gap-3"
										value={item.title}
										onSelect={() => setOpen(false)}
									>
										{item.icon && <item.icon className="size-5" />}
										<div className="flex flex-col">
											<p className="max-w-[250px] truncate text-sm font-medium">
												{item.title}
											</p>
											<p className="text-muted-foreground text-xs">
												{item.description}
											</p>
										</div>
										<p className="text-muted-foreground ml-auto text-xs">
											{item.category}
										</p>
									</CommandItem>
								);
							})}
						</CommandGroup>
					</CommandList>
				</Command>
			</ModalContent>
		</Modal>
	);
}
