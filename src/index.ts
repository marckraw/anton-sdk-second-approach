import { ModelFactory, ModelType } from "./models/factory";
import { AIModel, Message } from "./models/base";
import { setupAxios } from "./browser";

// Run setup if in browser environment
if (typeof window !== "undefined") {
  setupAxios();
}
export class AntonSDK {
  private model: AIModel;
  constructor(config: { type: ModelType; apiKey: string }) {
    try {
      this.model = ModelFactory.create(config.type, config.apiKey);
    } catch (e) {
      console.error(e);
    }
  }
  async chat(messages: Message[]): Promise<string> {
    return this.model.chat(messages);
  }
}
export { ModelType, Message };
