"use client";

import {
  LogIn,
  LogOut,
  ChevronUp,
  Home,
  Aperture,
  FileText,
  ClipboardPen,
} from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@auth0/nextjs-auth0";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "GraphiQL",
    url: "/gql",
    icon: Aperture,
  },
];

const log_buttons = {
  register: {
    title: "Sign up",
    url: "/auth/login?screen_hint=signup",
    icon: ClipboardPen,
  },
  login: {
    title: "Sign in",
    url: "/auth/login",
    icon: LogIn,
  },
  logout: {
    title: "Sign out",
    url: "/auth/logout",
    icon: LogOut,
  },
};

export function AppSidebar() {
  const { user, isLoading } = useUser();
  return (
    <Sidebar variant="floating" collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>GQL-POC</SidebarGroupLabel>
          <SidebarSeparator className="mb-1 group-data-[collapsible=icon]:hidden" />
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) =>
                item.title === "GraphiQL" && !user ? (
                  <TooltipProvider key={item.title} delayDuration={0}>
                    <Tooltip>
                      <TooltipTrigger>
                        <SidebarMenuItem className="pointer-events-none">
                          <SidebarMenuButton asChild>
                            <a href={item.url}>
                              <item.icon />
                              <span>{item.title}</span>
                            </a>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      </TooltipTrigger>
                      <TooltipContent side="right">
                        <p>Sign in required: Please authenticate to proceed</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ) : (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                {user ? (
                  <SidebarMenuButton size={`lg`}>
                    <Avatar className="relative flex shrink-0 overflow-hidden h-8 w-8 rounded-xl">
                      <AvatarImage src={user.picture} />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">
                        {user.nickname}
                      </span>
                      <span className="truncate text-xs">{user.email}</span>
                    </div>
                    <ChevronUp className="ml-auto" />
                  </SidebarMenuButton>
                ) : (
                  <SidebarMenuButton size={`lg`}>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="flex truncate font-semibold justify-center">
                        Sign in / Sign up
                      </span>
                    </div>
                    <ChevronUp className="ml-auto" />
                  </SidebarMenuButton>
                )}
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                {user ? (
                  <SidebarMenuButton asChild>
                    <a href={log_buttons.logout.url}>
                      <log_buttons.logout.icon />
                      <span>{log_buttons.logout.title}</span>
                    </a>
                  </SidebarMenuButton>
                ) : (
                  <>
                    <SidebarMenuButton asChild>
                      <a href={log_buttons.login.url}>
                        <log_buttons.login.icon />
                        <span>{log_buttons.login.title}</span>
                      </a>
                    </SidebarMenuButton>
                    <SidebarMenuButton asChild>
                      <a href={log_buttons.register.url}>
                        <log_buttons.register.icon />
                        <span>{log_buttons.register.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
