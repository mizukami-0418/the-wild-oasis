import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";

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
    </TableOperations>
  );
}

export default CabinTableOperations;
