"use client";

import { Button } from "lynote-ui/button";
import { Toaster, toast } from "lynote-ui/sonner";

const App: React.FC = () => {
  return (
    <>
      <Toaster richColors />
      <div className="flex flex-wrap gap-2">
        <Button variant="outline" onClick={() => toast("已发送邀请")}>
          普通提示
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.success("保存成功", { description: "数据已同步到云端" })
          }
        >
          成功
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.error("提交失败", { description: "请检查网络后重试" })
          }
        >
          错误
        </Button>
        <Button variant="outline" onClick={() => toast.info("有新版本可用")}>
          信息
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast("文件已删除", {
              action: {
                label: "撤销",
                onClick: () => toast.success("已恢复"),
              },
            })
          }
        >
          带撤销
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            const id = toast.loading("正在保存...");
            setTimeout(() => toast.success("保存成功", { id }), 1500);
          }}
        >
          异步 loading
        </Button>
      </div>
    </>
  );
};

export default App;
