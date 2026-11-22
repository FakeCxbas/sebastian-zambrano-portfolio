---
name: modern-component-patterns
description: Production component architecture patterns for React 19, Next.js App Router, Tailwind CSS, semantic token systems, and headless primitives.
---

Architect UI components using modular, type-safe, and highly composable patterns suitable for modern web applications.

## 1. Class Variance and Styling Merging (`cn` Pattern)

Never concatenate Tailwind classes with naive string templates (`className="p-4 ${isActive ? 'bg-blue' : ''}"`). Use the standard utility pairing `clsx` and `tailwind-merge` to resolve specificity collisions reliably:

```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
```

### Class Variance Authority (CVA) for Multi-variant Components
Define variants declaratively with explicit defaults:

```typescript
import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
```

## 2. Semantic Design Tokens and Theming

Structure color and spacing tokens semantically rather than referencing raw palette names (`blue-500`, `gray-100`) directly in component bodies. This makes dark mode and rebranding instant:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  --card: 0 0% 100%;
  --card-foreground: 240 10% 3.9%;
  --popover: 0 0% 100%;
  --popover-foreground: 240 10% 3.9%;
  --primary: 240 5.9% 10%;
  --primary-foreground: 0 0% 98%;
  --secondary: 240 4.8% 95.9%;
  --secondary-foreground: 240 5.9% 10%;
  --muted: 240 4.8% 95.9%;
  --muted-foreground: 240 3.8% 46.1%;
  --accent: 240 4.8% 95.9%;
  --accent-foreground: 240 5.9% 10%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 0 0% 98%;
  --border: 240 5.9% 90%;
  --input: 240 5.9% 90%;
  --ring: 240 5.9% 10%;
  --radius: 0.5rem;
}

.dark {
  --background: 240 10% 3.9%;
  --foreground: 0 0% 98%;
  --card: 240 10% 3.9%;
  --card-foreground: 0 0% 98%;
  --popover: 240 10% 3.9%;
  --popover-foreground: 0 0% 98%;
  --primary: 0 0% 98%;
  --primary-foreground: 240 5.9% 10%;
  --secondary: 240 3.7% 15.9%;
  --secondary-foreground: 0 0% 98%;
  --muted: 240 3.7% 15.9%;
  --muted-foreground: 240 5% 64.9%;
  --accent: 240 3.7% 15.9%;
  --accent-foreground: 0 0% 98%;
  --destructive: 0 62.8% 30.6%;
  --destructive-foreground: 0 0% 98%;
  --border: 240 3.7% 15.9%;
  --input: 240 3.7% 15.9%;
  --ring: 240 4.9% 83.9%;
}
```

## 3. Composition Patterns: Slots and Compound Components

Avoid monolithic components with dozens of optional boolean flags (`isHeader`, `showFooter`, `hasIconLeft`, `hasIconRight`). Prefer composable compound structures:

```tsx
// Composable Dialog Structure
<Dialog open={isOpen} onOpenChange={setIsOpen}>
  <DialogTrigger asChild>
    <Button variant="outline">Edit Profile</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Edit Profile</DialogTitle>
      <DialogDescription>
        Update your personal details below. Click save when complete.
      </DialogDescription>
    </DialogHeader>
    <div className="grid gap-4 py-4">
      <FormField label="Full Name" name="name" defaultValue="Alex Rivera" />
      <FormField label="Email" name="email" type="email" defaultValue="alex@example.com" />
    </div>
    <DialogFooter>
      <Button variant="ghost" onClick={() => setIsOpen(false)}>Cancel</Button>
      <Button type="submit">Save Changes</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

### Polymorphic Elements (`asChild` Pattern)
Use Radix's Slot utility or standard React composition so callers can swap out the rendering element (e.g. rendering a Next.js `<Link>` with the visual styling and behavior of a `<Button>`) without breaking DOM semantics.

## 4. Modern React 19 State and Mutation Patterns

When executing mutations and form submissions in modern React:
- Use React 19 Server Actions paired with `useActionState` to handle loading, error, and validation payloads seamlessly without manual `useEffect` flags.
- Use `useOptimistic` for instant visual updates on low-latency interactions (e.g., toggling a star, changing a status badge, submitting a reaction) with automatic rollback on server error.
- Keep Client Components at the leaves of your component tree. Fetch data on the Server Component level and pass serialized data down.
