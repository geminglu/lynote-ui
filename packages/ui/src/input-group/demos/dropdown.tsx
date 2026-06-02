"use client";

import { ChevronDownIcon, MoreHorizontal } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "lynote-ui/dropdown-menu";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "lynote-ui/input-group";

export default function App() {
  return (
    <div className="grid w-full max-w-sm gap-4">
      <InputGroup>
        <InputGroupInput placeholder="输入文件名" />
        <InputGroupAddon align="inline-end">
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <InputGroupButton
                  variant="ghost"
                  aria-label="More"
                  size="xs"
                  icon
                >
                  <MoreHorizontal />
                </InputGroupButton>
              }
            />
            <DropdownMenuContent align="end" sideOffset={8} alignOffset={-4}>
              <DropdownMenuGroup>
                <DropdownMenuItem>设置</DropdownMenuItem>
                <DropdownMenuItem>复制路径</DropdownMenuItem>
                <DropdownMenuItem>打开位置</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="输入搜索查询" />
        <InputGroupAddon align="inline-end">
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <InputGroupButton variant="ghost" className="pr-1.5! text-xs">
                  搜索... <ChevronDownIcon className="size-3" />
                </InputGroupButton>
              }
            />
            <DropdownMenuContent align="end" sideOffset={8} alignOffset={-4}>
              <DropdownMenuGroup>
                <DropdownMenuItem>文档</DropdownMenuItem>
                <DropdownMenuItem>博客</DropdownMenuItem>
                <DropdownMenuItem>更新日志</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}
