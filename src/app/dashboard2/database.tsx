"use client";
import { ID, Query } from "appwrite";
import { databases } from "../appwrite";
import { createContext, useContext, useEffect, useState } from "react";

// Define your database and collection IDs
export const COMMENTS_DATABASE_ID = "6560dcf034207b94d8ee"; // Replace with your database ID
export const COMMENTS_COLLECTION_ID = "65c64954cca31903891f"; // Replace with your collection ID

interface Comment {
  comment_id: string;
  user_id: string;
  content: string;
  timestamp: number;
}

const CommentsContext = createContext<any>(null);

export function useComments() {
  return useContext(CommentsContext);
}

export function CommentsProvider(props: { children: React.ReactNode }) {
  const [comments, setComments] = useState<Comment[]>([]);

  async function add(comment: Comment) {
    const response = await databases.createDocument(
      COMMENTS_DATABASE_ID,
      COMMENTS_COLLECTION_ID,
      ID.unique(),
      comment
    );
    setComments((existingComments) => [
      ...existingComments,
      {
        comment_id: response.$id ?? "",
        user_id: response.userId ?? "",
        content: response.content ?? "",
        timestamp: response.$createdAt ? Number(response.$createdAt) : 0,
      },
    ]);
  }

  async function remove(commentId: string) {
    await databases.deleteDocument(
      COMMENTS_DATABASE_ID,
      COMMENTS_COLLECTION_ID,
      commentId
    );
    setComments((existingComments) =>
      existingComments.filter((comment) => comment.comment_id !== commentId)
    );
    await init(); // Refetch comments to ensure we have 10 items
  }

  async function init() {
    const response = await databases.listDocuments(
      COMMENTS_DATABASE_ID,
      COMMENTS_COLLECTION_ID,
      [Query.orderDesc("$createdAt"), Query.limit(10)]
    );
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <CommentsContext.Provider value={{ current: comments, add, remove }}>
      {props.children}
    </CommentsContext.Provider>
  );
}
