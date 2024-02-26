import {MongoClient} from "mongodb";

export async function connectDatabase() {
  try {
    const url = 'mongodb+srv://qpdlqltb1215:ADriB68N9I2u2KaY@cluster0.trp51w4.mongodb.net/mydatabase?retryWrites=true&w=majority';
    const client = await MongoClient.connect(url);
    return client;
  } catch (e) {
    console.error('Failed to connect to the database! : ',e.message)
  }
}

export async function connectToPostCollection() {
  try {
    const client = await connectDatabase()
    const db = client.db();
    const postsCollection = db.collection('posts');
    return { client, db, postsCollection };
  } catch (error) {
    console.error('[posts error] Error connecting to MongoDB:', error);
    throw error;
  }
}