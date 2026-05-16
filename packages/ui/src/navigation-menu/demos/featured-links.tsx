import { BlocksIcon, BookOpenIcon, PaletteIcon, ZapIcon } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "lynote-ui";

const links = [
  {
    title: "组件",
    description: "浏览所有表单、导航和反馈组件。",
    icon: BlocksIcon,
  },
  {
    title: "主题",
    description: "了解 CSS 变量、暗色模式和 Tailwind v4 配置。",
    icon: PaletteIcon,
  },
  {
    title: "快速开始",
    description: "安装组件库并在 Vite 项目中引入样式。",
    icon: ZapIcon,
  },
  {
    title: "文档规范",
    description: "查看组件 README 与 demo 的书写约定。",
    icon: BookOpenIcon,
  },
];

const App: React.FC = () => {
  return (
    <NavigationMenu align="center">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>资源</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[520px] grid-cols-2 gap-2 p-3">
              {links.map((link) => (
                <NavigationMenuLink key={link.title} className="items-start">
                  <link.icon className="mt-0.5" />
                  <span className="grid gap-1">
                    <span className="font-medium">{link.title}</span>
                    <span className="text-muted-foreground text-xs leading-5">
                      {link.description}
                    </span>
                  </span>
                </NavigationMenuLink>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink>定价</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default App;
