import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "lynote-ui";

const App: React.FC = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>姓名</TableHead>
          <TableHead>邮箱</TableHead>
          <TableHead>角色</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>张三</TableCell>
          <TableCell>zhangsan@example.com</TableCell>
          <TableCell>管理员</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>李四</TableCell>
          <TableCell>lisi@example.com</TableCell>
          <TableCell>用户</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>王五</TableCell>
          <TableCell>wangwu@example.com</TableCell>
          <TableCell>用户</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default App;
