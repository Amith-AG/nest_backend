import { Controller, Post, Body, Req, Res, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('webhook')
export class WebhookController {
  @Post()
  async handleWebhook(
    @Req() req: Request,
    @Body() body: any,
    @Res() res: Response,
  ) {
    try {
      console.log('Webhook received:', body);
      console.log('webhook headers:',req.headers)


      return res
        .status(HttpStatus.OK)
        .json({ message: 'Webhook received successfully' });
    } catch (error) {
      console.error('Error processing webhook:', error);
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: 'Webhook processing failed' });
    }
  }
}
