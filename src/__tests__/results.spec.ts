import * as fs from 'fs';
import { isAllOK, getMessages } from '../results';
import { RawResult } from '../types';

describe('results', () => {
  describe('all results OK', () => {
    it('should indicate all results are OK', async () => {
      const rawResults: RawResult[] = [
        {
          bin: 'mvn',
          satisfies: true,
        } as RawResult,
      ];

      const result = isAllOK(rawResults);
      expect(result).toBe(true);
    });

    it('should indicate all results are OK', async () => {
      const rawResults: RawResult[] = [
        {
          bin: 'mvn',
          satisfies: false,
        } as RawResult,
      ];

      const result = isAllOK(rawResults);
      expect(result).toBe(false);
    });
  });

  describe('custom messages', () => {
    it('should return messages', async () => {
      const rawResults: RawResult[] = [
        {
          bin: 'mvn',
          installed: false,
          installMessage: '<mvn install instructions>',
        } as RawResult,
        {
          bin: 'nginx',
          satisfies: false,
          updateMessage: '<nginx update instructions>',
        } as RawResult,
      ];

      const result = getMessages(rawResults);
      const expectation = ['<mvn install instructions>', '<nginx update instructions>'];
      expect(result).toEqual(expectation);
    });
  });
});
