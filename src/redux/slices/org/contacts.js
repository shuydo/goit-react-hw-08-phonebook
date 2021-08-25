import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// import { useSelector } from "react-redux";

// const token = useSelector(state => state.auth.token);
// console.log(token);

export const items = createApi({
  reducerPath: "items", // reducerPath: "contactsApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: "https://60ad63bf80a61f0017330e5e.mockapi.io/api/v1/",
    baseUrl: "https://connections-api.herokuapp.com/",
  }),

  tagTypes: ["Contact"],
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => "/contacts",
      providesTags: ["Contact"],
    }),

    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Contact"],
    }),

    createContact: builder.mutation({
      query: newContact => ({
        url: "/contacts",
        method: "POST",
        body: newContact,
      }),
      invalidatesTags: ["Contact"],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useDeleteContactMutation,
  useCreateContactMutation,
} = items;
