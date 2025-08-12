import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import { createCabin } from "../../services/apiCabins";
import FormRow from "../../ui/FormRow";

function CreateCabinForm() {
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;

  const queryClient = useQueryClient();

  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      toast.success("キャビンの追加に成功！😁");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  function onSubmit(data) {
    mutate({ ...data, image: data.image[0] });
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="施設名" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isCreating}
          {...register("name", {
            required: "入力必須項目です",
          })}
        />
      </FormRow>

      <FormRow label="最大収容人数" error={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          disabled={isCreating}
          {...register("maxCapacity", {
            required: "入力必須項目です",
            min: {
              value: 1,
              message: "最小の入力値は１です",
            },
          })}
        />
      </FormRow>

      <FormRow label="定価" error={errors?.regularPrice?.message}>
        <Input
          type="number"
          id="regularPrice"
          disabled={isCreating}
          {...register("regularPrice", {
            required: "入力必須項目です",
            min: {
              value: 1,
              message: "最小の入力値は１です",
            },
          })}
        />
      </FormRow>

      <FormRow label="値引き" error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          defaultValue={0}
          {...register("discount", {
            required: "入力必須項目です",
            validate: (value) =>
              value < getValues().regularPrice || "定価より低く設定してね",
          })}
        />
      </FormRow>

      <FormRow label="施設紹介" error={errors?.description?.message}>
        <Textarea
          type="number"
          id="description"
          disabled={isCreating}
          defaultValue=""
          {...register("description", {
            required: "入力必須項目です",
          })}
        />
      </FormRow>

      <FormRow label="画像">
        <FileInput
          id="image"
          accept="image/*"
          type="file"
          {...register("image", {
            required: "入力必須項目です",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isCreating}>キャビンを追加</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
