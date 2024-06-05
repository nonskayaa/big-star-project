import { FeedbackFormType } from "../types/FeedbackFormType";
import { $host } from "./index";

export const postFeedbackForm = async (form: FeedbackFormType) => {
  const { data } = await $host.post("api/feedbackForm", form);
};
