import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
          Welcome
        </h1>
        <p className="text-muted-foreground text-lg">
          Your 404 page is ready. Try visiting a non-existent route to see it in action.
        </p>
        <Button asChild variant="outline">
          <Link href="/">
           Back home
          </Link>
        </Button>
      </div>
    </main>
  )
}