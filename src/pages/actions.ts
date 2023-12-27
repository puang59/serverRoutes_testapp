"use server";

import { db } from "~~/server/db";

export async function createPost(formData: FormData) {
    const text = formData.get("text") as string;
    await db.post.create({data: {text}});
}