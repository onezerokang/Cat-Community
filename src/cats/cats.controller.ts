import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  UseInterceptors,
} from '@nestjs/common';
import { SuccessInterceptor } from 'src/common/interceptors/success.interceptor';
import { PositiveIntPipe } from 'src/common/pipes/positiveInt.pipe';
import { CatsService } from './cats.service';

@Controller('cats')
@UseInterceptors(SuccessInterceptor)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getAllCat() {
    // throw new HttpException('에러 발생!', HttpStatus.FORBIDDEN);
    return { cats: 'get all cat api' };
  }

  @Get(':id')
  getOneCat(@Param('id', ParseIntPipe, PositiveIntPipe) catid) {
    return 'one cat';
  }

  @Post()
  createCat() {
    // throw new HttpException({ success: false, message: 'Api is broken' }, 401);
    return 'create cat';
  }

  @Patch(':id')
  updateCat() {
    return 'updateCat';
  }

  @Delete(':id')
  deleteCat() {
    return 'delete cat';
  }
}
