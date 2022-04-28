import { IsString } from 'class-validator';

export class CreateMessageDto {
  @IsString()
  readonly content: string;
  // readonly author: string;
}
