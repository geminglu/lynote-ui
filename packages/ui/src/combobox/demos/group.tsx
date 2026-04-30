import {
  Combobox,
  ComboboxCollection,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  ComboboxSeparator,
} from "lynote-ui";

const fruits = [
  { value: "apple", label: "苹果" },
  { value: "banana", label: "香蕉" },
  { value: "orange", label: "橙子" },
];

const vegetables = [
  { value: "carrot", label: "胡萝卜" },
  { value: "tomato", label: "西红柿" },
  { value: "potato", label: "土豆" },
];

const foods = [...fruits, ...vegetables];

const App: React.FC = () => {
  return (
    <Combobox<(typeof foods)[number]>
      items={foods}
      itemToStringLabel={(food) => food.label}
    >
      <ComboboxInput className="w-[240px]" placeholder="搜索食材..." />
      <ComboboxContent>
        <ComboboxEmpty>未找到食材</ComboboxEmpty>
        <ComboboxList>
          <ComboboxGroup items={fruits}>
            <ComboboxLabel>水果</ComboboxLabel>
            <ComboboxCollection>
              {(food) => (
                <ComboboxItem key={food.value} value={food}>
                  {food.label}
                </ComboboxItem>
              )}
            </ComboboxCollection>
          </ComboboxGroup>
          <ComboboxSeparator />
          <ComboboxGroup items={vegetables}>
            <ComboboxLabel>蔬菜</ComboboxLabel>
            <ComboboxCollection>
              {(food) => (
                <ComboboxItem key={food.value} value={food}>
                  {food.label}
                </ComboboxItem>
              )}
            </ComboboxCollection>
          </ComboboxGroup>
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
};

export default App;
