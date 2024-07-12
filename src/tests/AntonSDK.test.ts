import { describe, it, expect, vi } from 'vitest';
import { AntonSDK } from '../index';

describe('AntonSDK', () => {
    it('should initialize with Anthropic model', () => {
        const sdk = new AntonSDK({ type: 'anthropic', apiKey: 'test-key' });
        expect(sdk).to.be.instanceOf(AntonSDK);
    });
});