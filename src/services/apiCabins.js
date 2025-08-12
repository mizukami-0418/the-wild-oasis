import supabase from "./supabase";

export async function getCabins() {
  const { data: cabins, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("キャビンをロードできませんでした 😂");
  }

  return cabins;
}

export async function createCabin(newCabin) {
  const imageName = `${Math.random()} - ${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = `${supabase.supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  const { data, error } = await supabase
    .from("cabins")
    .insert({ ...newCabin, image: imagePath })
    .select();

  if (error) {
    console.error(error);
    throw new Error("キャビンの作成に失敗 😂");
  }

  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "画像のアップロードを失敗してキャビンの作成ができませんでした"
    );
  }

  return data;
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
