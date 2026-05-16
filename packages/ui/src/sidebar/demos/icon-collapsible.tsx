import { BarChart3Icon, HomeIcon, InboxIcon, SettingsIcon } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "lynote-ui";

const items = [
  { title: "仪表盘", icon: HomeIcon, active: true },
  { title: "收件箱", icon: InboxIcon },
  { title: "数据报表", icon: BarChart3Icon },
  { title: "系统设置", icon: SettingsIcon },
];

const App: React.FC = () => {
  return (
    <SidebarProvider defaultOpen={false}>
      <Sidebar collapsible="icon">
        <SidebarHeader>
          <div className="flex h-8 items-center px-2 text-sm font-semibold">
            LyNote
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>工作区</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      isActive={item.active}
                      tooltip={item.title}
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <header className="flex h-12 items-center gap-2 border-b px-4">
          <SidebarTrigger />
          <span className="text-sm font-medium">图标折叠侧栏</span>
        </header>
        <div className="text-muted-foreground p-4 text-sm">
          点击触发器或侧栏轨道切换展开状态。
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default App;
