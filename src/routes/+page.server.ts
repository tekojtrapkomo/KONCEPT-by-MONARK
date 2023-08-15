import { connect, disconnect, client } from '$lib/server/mongo';
import { error } from '@sveltejs/kit';
import { serializeNonPOJOs } from "$lib/pojo";
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    await connect();
    if (!client) {
        throw new Error("'client' is null");
      }
    const db = client.db("test");
    const posts = serializeNonPOJOs(await db.collection("submissions").find().sort({createdAt: -1}).toArray());
    console.log(posts)
    return { posts };
};

export const actions = {
    postIt: async ({ request }) => {
      const body = Object.fromEntries(await request.formData());
      try {
        await connect();
  
        if (!client) {
          throw new Error("'client' is null");
        }
  
        const db = client.db('test');
        const collection = db.collection('submissions');
        const postedTime = new Date();
        const { title, description, idk } = body;
        const newPost = { title, description, idk, createdAt: postedTime };
        await collection.insertOne(newPost);
  
        return {
          status: 303,
          headers: {
            location: '/'
          }
        };
      } catch (err) {
        console.log(err);
        throw error;
      } finally {
        await disconnect(); // Disconnect the client after using it
      }
    },

    deleteIt: async ({ request }) => {
        await connect();
        if (!client) {
            throw new Error("'client' is null");
          }
        const db = client.db("test");
        const collection = db.collection("submissions");
        await collection.deleteMany();
    }
  };