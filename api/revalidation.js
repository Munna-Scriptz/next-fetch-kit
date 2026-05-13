import { revalidateTag, revalidatePath } from "next/cache";


// revalidates example
export async function invalidateTag(tag) {
    revalidateTag(tag);
}

export async function invalidatePath(path) {
    revalidatePath(path);
}