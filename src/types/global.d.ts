declare global {
  async function wsSend(action: string, payload: any): Promise<void>;
}

export {};
