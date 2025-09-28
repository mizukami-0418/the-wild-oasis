import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "全て" },
          { value: "no-discount", label: "割引なし" },
          { value: "with-discount", label: "割引あり" },
        ]}
      />

      <SortBy
        options={[
          { value: "regularPrice-asc", label: "価格順↗️" },
          { value: "regularPrice-desc", label: "価格順↘️" },
          { value: "maxCapacity-asc", label: "人数↗️" },
          { value: "maxCapacity-desc", label: "人数↘️" },
          { value: "discount-asc", label: "割引↗️" },
          { value: "discount-desc", label: "割引↘️" },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
