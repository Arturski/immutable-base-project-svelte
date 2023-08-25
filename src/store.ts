import { writable } from "svelte/store";
import {config, passport} from "@imtbl/sdk";

const passportConfig = {
  clientId: "nfdaNfQBN2C4mq0HR3oxHNlZoC8cOtQZ",
  redirectUri: "https://main--scintillating-lamington-c5e3fb.netlify.app/login",
  logoutRedirectUri: "https://main--scintillating-lamington-c5e3fb.netlify.app/",
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
