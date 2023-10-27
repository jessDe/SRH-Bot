import { TwitterApi } from "twitter-api-v2";

const client = new TwitterApi({
    appKey: process.env.TWITTER_APP as string,
    appSecret: process.env.TWITTER_APP_SECRET as string,
    accessToken: process.env.TWITTER_TOKEN as string,
    accessSecret: process.env.TWITTER_SECRET
})
export const TwitterClient = client.readWrite