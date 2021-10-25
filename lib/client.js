import { createClient } from "microcms-js-sdk";

export const client = createClient({
	serviceDomain: "pim-site",
	apiKey: process.env.API_KEY,
});
