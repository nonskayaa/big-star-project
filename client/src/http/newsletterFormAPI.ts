import { $host } from "./index";

export const postNewsletterForm = async (form: { email: string } ) => {
  const { data } = await $host.post("api/newsletterForm", form);
};
