import { Injectable } from '@nestjs/common';
import { complete } from './lib/deepseek';

@Injectable()
export class AppService {
  async getHello(): Promise<string> {
    return await complete() 
  }
}
