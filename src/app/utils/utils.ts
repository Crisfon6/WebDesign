import { environment } from "../../environments/environment";
import { Topic } from "../interfaces";

const normalizeString = (str: string) => str.trim().toLowerCase() || '';

const getTopicByName = (topic: string):Topic  => {
  let topicFounded =  environment.topics.find(({ name }) => normalizeString(name) === normalizeString(topic));
  if(topicFounded) return topicFounded;
  let topicEmpty = {} as Topic;
  return topicEmpty;
}

export  {
  normalizeString,
  getTopicByName
}
