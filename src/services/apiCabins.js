import supabase from "./supabase";

export async function getCabins() {
  const { data: cabins, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("キャビンをロードできませんでした 😂");
  }

  return cabins;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("キャビンの削除に失敗 😂");
  }

  return data;
}

// const { data, error } = await supabase.from("cabins").delete().eq("id", id);
