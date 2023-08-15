
import {MongoClient, ServerApiVersion} from 'mongodb';
import {MONGODB_URI} from '$env/static/private'
let client: MongoClient | null;

export async function connect() {
    if (!client) {
      // Create a MongoClient with a MongoClientOptions object to set the Stable API version
      client = new MongoClient(MONGODB_URI, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        },
      });
  
      await client.connect();
    }
  }
  
  export async function disconnect() {
    if (client) {
      await client.close();
      client = null;
    }
  }
  
  // Export the client instance for reuse in other modules
  export { client };