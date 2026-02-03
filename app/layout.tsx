import React, { Suspense } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  Home,
  FolderKanban,
  Users,
  Calendar,
  MessageSquare,
  Settings,
  Search,
  LogOut,
} from "lucide-react";

const geistSans = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Acme Dashboard",
  description: "Modern dashboard with sidebar navigation",
};

const navItems = [
  { icon: Home, label: "Dashboard", href: "/" },
  { icon: FolderKanban, label: "Projects", href: "/pages/projects" },
  { icon: Users, label: "Team", href: "/team" },
  { icon: Calendar, label: "Calendar", href: "/calendar" },
  { icon: MessageSquare, label: "Messages", href: "/messages" },
  { icon: Settings, label: "Settings", href: "/pages/setting" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.className} antialiased`}>
        <div className="flex h-screen">
          {/* Sidebar */}
          <aside className="flex h-full w-64 flex-col border-r border-border bg-sidebar">
            {/* Logo */}
            <div className="flex h-14 items-center gap-2 border-b border-border px-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
                <span className="text-sm font-bold text-primary-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                </span>
              </div>
              <span className="text-lg font-semibold text-foreground">
                WorkManager
              </span>
            </div>

            {/* Search */}
            <div className="p-4">
              <Suspense fallback={<div>Loading...</div>}>
                <div className="flex items-center gap-2 rounded-md border border-border bg-background px-3 py-2">
                  <Search className="h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                  />
                </div>
              </Suspense>
            </div>

            {/* Navigation */}
            <nav className="flex-1 space-y-1 px-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </a>
              ))}
            </nav>

            {/* User Profile */}
            <div className="border-t border-border p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-muted">
                  <span className="text-sm font-medium text-muted-foreground">
                    JD
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">
                    John Doe
                  </p>
                  <p className="text-xs text-muted-foreground">john@acme.com</p>
                </div>
                <button className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground">
                  <LogOut className="h-4 w-4" />
                </button>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 overflow-auto bg-background">{children}</main>
        </div>
      </body>
    </html>
  );
}
