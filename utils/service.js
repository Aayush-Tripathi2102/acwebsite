import supabase from "./supabase";
export async function FetchEventDetails() {
  const { data, error } = await supabase.from("events").select(`
    *,
    event_images (
      image_url
    )
  `);
  if (error) {
    throw new Error("Error Fetching Event data");
  } else return data;
}
export async function FetchEvent(event_id) {
  const { data, error } = await supabase
    .from("events")
    .select(
      `
    *,
    event_images (
      image_url
    )
  `
    )
    .eq("event_id", event_id)
    .single();
  if (error) {
    throw new Error("Error Fetching Event data");
  } else return data;
}
