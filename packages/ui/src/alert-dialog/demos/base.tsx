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

const App: React.FC = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger
        render={<Button variant="outline">显示对话框</Button>}
      />
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>你确定要继续吗?</AlertDialogTitle>
          <AlertDialogDescription>
            该操作不可撤销,请确认你已理解后果。
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>取消</AlertDialogCancel>
          <AlertDialogAction>继续</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default App;
