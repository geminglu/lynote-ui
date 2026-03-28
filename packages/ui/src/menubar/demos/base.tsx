import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "lynote-ui";

const App: React.FC = () => {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>文件</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>新建</MenubarItem>
          <MenubarItem>打开</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>退出</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>编辑</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>撤销</MenubarItem>
          <MenubarItem>重做</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>查找</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>视图</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>缩放</MenubarItem>
          <MenubarItem>全屏</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default App;
