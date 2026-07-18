import {
  ConfigProvider,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Size as typeSize,
} from "lynote-ui";
import { useState } from "react";

import AccordionBase from "../../accordion/demos/base";
import AlertDialogBase from "../../alert-dialog/demos/base";
import AlertDialogDestructive from "../../alert-dialog/demos/destructive";
import AlertBase from "../../alert/demos/base";
import AvatarBase from "../../avatar/demos/base";
import BadgeBase from "../../badge/demos/base";
import BreadcrumbDropdown from "../../breadcrumb/demos/with-dropdown";
import ButtonGroupBase from "../../button-group/demos/base";
import CardBase from "../../card/demos/base";
import CommandBase from "../../command/demos/base";
import DrawerResponsive from "../../drawer/demos/responsive-dialog";
import DropdownMenuComplex from "../../dropdown-menu/demos/complex";
import FieldProjectForm from "../../field/demos/projectForm";
import ItemBase from "../../item/demos/base";
import KbdBase from "../../kbd/demos/base";
import PaginationControlled from "../../pagination/demos/controlled";
import PopoverWithForm from "../../popover/demos/withForm";
import ProgressBase from "../../progress/demos/base";
import SheetBase from "../../sheet/demos/base";
import SkeletonBase from "../../skeleton/demos/base";
import SpinnerBase from "../../spinner/demos/base";
import TableFixed from "../../table/demos/fixed";
import TabsBase from "../../tabs/demos/base";
import ToggleBase from "../../toggle/demos/base";
import TooltipWithKbd from "../../tooltip/demos/with-kbd";

import ContextMenuDestructive from "../../context-menu/demos/destructive";

const App: React.FC = () => {
  const items = [
    { value: "default", label: "default" },
    { value: "xs", label: "xs" },
    { value: "sm", label: "sm" },
    { value: "lg", label: "lg" },
  ];

  const [size, setSize] = useState<typeSize>("xs");
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex items-center space-x-4">
        <Select
          items={items}
          value={size}
          onValueChange={(value) => {
            console.log(value);
            setSize(value as typeSize);
          }}
        >
          <SelectTrigger>
            <SelectValue placeholder="选择一个选项" />
          </SelectTrigger>
          <SelectContent>
            {items.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <ConfigProvider size={size}>
        <AccordionBase />

        <AlertBase />

        <BadgeBase />

        <AvatarBase />

        <KbdBase />

        <ItemBase />

        <CardBase />

        <TabsBase />

        <SpinnerBase />

        <ProgressBase />

        <SkeletonBase />

        <ToggleBase />

        <ContextMenuDestructive />

        <FieldProjectForm />

        <div className="flex flex-wrap items-center gap-4">
          <AlertDialogBase />

          <DropdownMenuComplex />

          <CommandBase />

          <AlertDialogDestructive />

          <DrawerResponsive />

          <PopoverWithForm />

          <SheetBase />

          <TooltipWithKbd />

          <ButtonGroupBase />
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <BreadcrumbDropdown />

          <PaginationControlled />
        </div>

        <TableFixed />
      </ConfigProvider>
    </div>
  );
};

export default App;
