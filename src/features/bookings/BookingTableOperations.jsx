import SortBy from "../../ui/SortBy";
import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";

function BookingTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="status"
        options={[
          { value: "all", label: "全て" },
          { value: "checked-out", label: "チェックアウト" },
          { value: "checked-in", label: "チェックイン" },
          { value: "unconfirmed", label: "未確認" },
        ]}
      />

      <SortBy
        options={[
          { value: "startDate-desc", label: "新しい日付順" },
          { value: "startDate-asc", label: "古い日付順" },
          {
            value: "totalPrice-desc",
            label: "価格が高い順",
          },
          { value: "totalPrice-asc", label: "価格が安い順" },
        ]}
      />
    </TableOperations>
  );
}

export default BookingTableOperations;
