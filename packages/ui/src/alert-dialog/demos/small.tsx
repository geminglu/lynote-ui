import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "lynote-ui/alert-dialog";
import { Button } from "lynote-ui/button";

export default function App() {
  return (
    <AlertDialog>
      <AlertDialogTrigger
        render={<Button variant="outline">显示对话框</Button>}
      />
      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          <AlertDialogTitle>允许设备连接？</AlertDialogTitle>
          <AlertDialogDescription>
            您是否允许 USB 配件连接到此设备？
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>不允许</AlertDialogCancel>
          <AlertDialogAction>允许</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
