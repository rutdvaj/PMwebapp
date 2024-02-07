import Next from "next";

declare global{
    namespace NodeJS {
        interface ProcessEnv {
            NEXT_PUBLIC_APPWRITE_PROJECT_ID_KEY: '65603d6ead21380f39ec';
        }
    }
}