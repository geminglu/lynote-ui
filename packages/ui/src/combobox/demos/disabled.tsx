import {
  Combobox,
  ComboboxContent,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "lynote-ui";

const roles = ["管理员", "编辑者", "访客"];

const App: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <Combobox items={roles} defaultValue="编辑者" disabled>
        <ComboboxInput className="w-[240px]" placeholder="禁用状态" />
        <ComboboxContent>
          <ComboboxList>
            {(role) => (
              <ComboboxItem key={role} value={role}>
                {role}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>

      <Combobox items={roles} defaultValue="访客" readOnly>
        <ComboboxInput className="w-[240px]" placeholder="只读状态" />
        <ComboboxContent>
          <ComboboxList>
            {(role) => (
              <ComboboxItem key={role} value={role}>
                {role}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  );
};

export default App;
