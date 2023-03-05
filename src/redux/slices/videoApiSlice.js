import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query";

const YOUR_API_KEY = "AIzaSyBqp-HWS1Pv4-HH0Q9gZPTBGcxaTN_fk20";
const baseUrl = "https://www.googleapis.com/youtube/v3";

export const videoApiSlice = createApi({
  reducerPath: "videoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getPopularVideos: builder.query({
      query: (nextPageToken = "") => ({
        url: "/videos",
        params: {
          part: "snippet,contentDetails, statistics",
          chart: "mostPopular",
          maxResults: 20,
          regionCode: "IN",
          pageToken: nextPageToken,
          key: YOUR_API_KEY,
        },
      }),
    }),
  }),
});

export const { useGetPopularVideosQuery } = videoApi;

// https://youtube.googleapis.com/youtube/v3/videos?
// part=snippet,CcontentDetails,statistics&
// chart=mostPopular&
// regionCode=US&
// key=[YOUR_API_KEY]
