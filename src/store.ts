import { writable } from "svelte/store";
import {config, passport} from "@imtbl/sdk";

const passportConfig = {
  clientId: "GAvERIbbGXUYVWqlZLZ9KZ2p1LvRaHNv",
  redirectUri: "https://main--timely-alpaca-3c5221.netlify.app//login",
  logoutRedirectUri: "https://main--timely-alpaca-3c5221.netlify.app/",
  scope: "transact openid offline_access email",
  audience: "platform_api",
  baseConfig: new config.ImmutableConfiguration({
    environment: config.Environment.SANDBOX, // Set the appropriate environment value
    apiKey: "", // Provide the apiKey if required
  }),
};


const passportInstance = new passport.Passport(passportConfig);

export const providerStore = writable<undefined | null>(null);
export const passportStore = writable<passport.Passport>(passportInstance);
