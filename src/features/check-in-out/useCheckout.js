import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

function useCheckout() {
  const queryClient = useQueryClient();

  const { mutate: checkout, isLoading: isCheckingOut } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),

    onSuccess: (data) => {
      toast.success(`予約番号#${data.id}をチェックアウトしました`);
      queryClient.invalidateQueries({ active: true });
    },
    onError: () => toast.error("チェックアウトの更新に失敗しました"),
  });

  return { checkout, isCheckingOut };
}

export { useCheckout };
