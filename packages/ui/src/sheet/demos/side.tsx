import { Button } from "lynote-ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "lynote-ui/sheet";

const SHEET_SIDES = ["top", "right", "bottom", "left"] as const;

function SheetSide() {
  return (
    <div className="flex flex-wrap gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger
            render={
              <Button variant="outline" className="capitalize">
                {side}
              </Button>
            }
          />
          <SheetContent
            side={side}
            className="data-[side=bottom]:max-h-[50vh] data-[side=top]:max-h-[50vh]"
          >
            <SheetHeader>
              <SheetTitle>{side} 抽屉</SheetTitle>
              <SheetDescription>从 {side} 方向滑入。</SheetDescription>
            </SheetHeader>
            <div className="no-scrollbar overflow-y-auto px-4 text-sm">
              这里可以放置任意内容,例如列表、表单、详情等。
            </div>
            <SheetFooter>
              <Button type="submit">保存</Button>
              <SheetClose render={<Button variant="outline">取消</Button>} />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}

export default SheetSide;
