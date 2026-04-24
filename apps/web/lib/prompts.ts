export type RegistryItem = {
  name: string;
  dependencies?: string[];
  files: {
    path: string;
    content: string;
    type: string;
  }[];
};

export function generatePrompt(toolId: string, item: any): string {
  if (!item) return "Error: No component data found.";

  const dependencies = Array.isArray(item.dependencies) && item.dependencies.length > 0 
    ? `Install NPM dependencies:\n\`\`\`bash\n${item.dependencies.join(" ")}\n\`\`\`` 
    : "";

  const cssCode = `Extend existing Tailwind 4 index.css with this code (or if project uses Tailwind 3, extend tailwind.config.js or globals.css):
\`\`\`css
@import "tailwindcss";
@import "tw-animate-css";
\`\`\``;

  if (toolId === "lovable") {
    const filesCode = Array.isArray(item.files) 
      ? item.files.map((file: any) => {
          const filename = file.path?.split('/').pop() || file.path || "component.tsx";
          return `File location: components/ui/${filename}\n\nFile content: ${file.content || ""}`;
        }).join("\n\n\n")
      : "No files found for this component.";

    return `You are given a task to integrate a React component into your codebase.
Please verify your project has the following setup:
- shadcn/ui project structure
- Tailwind CSS v4.0
- TypeScript

If any of these are missing, provide instructions on how to setup project via shadcn CLI, install Tailwind or Typescript.

Determine the default path for components and styles. 
If default path for components is not /components/ui, provide instructions on why it's important to create this folder
Copy-paste this component to /components/ui folder:
${filesCode}
`;
  }

  // Formatting for Claude and Cursor
  const claudeFilesCode = Array.isArray(item.files)
    ? item.files.map((file: any) => {
        const filename = file.path?.split('/').pop() || file.path || "component.tsx";
        return `${filename}\n${file.content || ""}`;
      }).join("\n\n")
    : "No files found for this component.";

  const commonPromptHeader = `You are given a task to integrate an existing React component in the codebase

The codebase should support:
- shadcn project structure  
- Tailwind CSS
- Typescript

If it doesn't, provide instructions on how to setup project via shadcn CLI, install Tailwind or Typescript.

Determine the default path for components and styles. 
If default path for components is not /components/ui, provide instructions on why it's important to create this folder
Copy-paste this component to /components/ui folder:
\`\`\`tsx
${claudeFilesCode}
\`\`\`

${dependencies}

${cssCode}
`;

  if (toolId === "claude") {
    return commonPromptHeader;
  }

  // Default for Cursor or other IDEs
  return `${commonPromptHeader}
Implementation Guidelines
 1. Analyze the component structure and identify all required dependencies
 2. Review the component's argumens and state
 3. Identify any required context providers or hooks and install them
 4. Questions to Ask
 - What data/props will be passed to this component?
 - Are there any specific state management requirements?
 - Are there any required assets (images, icons, etc.)?
 - What is the expected responsive behavior?
 - What is the best place to use this component in the app?

Steps to integrate
 0. Copy paste all the code above in the correct directories
 1. Install external dependencies
 2. Fill image assets with Unsplash stock images you know exist
 3. Use lucide-react icons for svgs or logos if component requires them
`;
}
