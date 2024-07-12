import axios from "axios";
import { AIModel, Message } from "./base";
export class AnthropicModel implements AIModel {
  private baseURL = "https://api.anthropic.com/v1";
  constructor(private apiKey: string) {}
  async chat(messages: Message[]): Promise<any> {
    return messages;
  }
}
