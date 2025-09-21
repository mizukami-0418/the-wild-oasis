import Filter from "../../ui/Filter";

function DashboardFilter() {
  return (
    <Filter
      filterField="last"
      options={[
        { value: "7", label: "過去１週間" },
        { value: "30", label: "過去１ヶ月" },
        { value: "90", label: "過去３ヶ月" },
      ]}
    />
  );
}

export default DashboardFilter;
