/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseEnumPipe,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';
import { ReportType } from 'src/data';
import { CreateReportDto, ReportResponseDto, UpdateReportDto } from './app.dto';


@Controller('report/:type')
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get() // get request
  getData(@Param('type', new ParseEnumPipe(ReportType)) type: string): Array<ReportResponseDto> {
    const reportType: ReportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return this.appService.getData(reportType);
  }

  @Get(':id') // param request
  getDataFromID(@Param('id', ParseUUIDPipe) id: string, @Param('type', new ParseEnumPipe(ReportType)) type: string): ReportResponseDto {
    const reportType: ReportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return this.appService.getDataById(reportType, id);
  }

  @Post() // post request
  createNewReport(@Body() {
    source,
    amount,
  }: CreateReportDto, @Param('type', new ParseEnumPipe(ReportType)) type: string): ReportResponseDto {
    const reportType: ReportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return this.appService.createNewReport({ source, amount }, reportType);
  }

  @Put(':id') // put request
  updateExistingReport(@Body() body: UpdateReportDto, @Param('type', new ParseEnumPipe(ReportType)) type: string, @Param('id', ParseUUIDPipe) id: string): ReportResponseDto {
    const reportType: ReportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return this.appService.updateExistingReport(body, reportType, id);
  }

  @HttpCode(204)
  @Delete(':id') // delete request
  deleteReport(@Param('id', ParseUUIDPipe) id: string) {
    return this.appService.deleteReport(id);
  }
}
