import { passportStore, providerStore } from "./store";
import { get } from "svelte/store";

export async function login(): Promise<void> {
    const passportInstance = get(passportStore);
    const providerInstance = await passportInstance.connectImx();
    providerStore.set(providerInstance as any);
  }

export async function handleLoginCallback(): Promise<void> {
    const passport = get(passportStore);
    await passport.loginCallback();    
}