import { Injectable } from '@nestjs/common';
import { data, ReportData, ReportType } from './data';
import { v4 as uuid4 } from 'uuid';
import { ReportResponseDto } from './app.dto';

@Injectable()
export class AppService {
  getData(reportType: string): Array<ReportResponseDto> {
    return data
      .filter((report) => report.type === reportType)
      .map((report) => new ReportResponseDto(report));
  }

  getDataById(reportType: string, id: string): ReportResponseDto {
    const reportData = data
      .filter((report) => report.type === reportType)
      .find((report) => report.id === id);
    return new ReportResponseDto(reportData);
  }

  createNewReport(
    { source, amount }: { source: string; amount: number },
    reportType: string,
  ) {
    const createReport: ReportData = {
      id: uuid4(),
      source,
      amount,
      created_at: new Date(),
      updated_at: new Date(),
      type: reportType === 'income' ? ReportType.INCOME : ReportType.EXPENSE,
    };
    data.push(createReport);
    return new ReportResponseDto(createReport);
  }

  updateExistingReport(
    body: { source?: string; amount?: number },
    reportType: string,
    id: string,
  ): ReportResponseDto {
    const reportToUpdate = data
      .filter((report) => report.type === reportType)
      .find((report) => report.id === id);
    if (!reportToUpdate) return;
    const reportIndex = data.findIndex(
      (report) => report.id === reportToUpdate.id,
    );
    data[reportIndex] = {
      ...data[reportIndex],
      ...body,
      updated_at: new Date(),
    };
    return new ReportResponseDto(data[reportIndex]);
  }

  deleteReport(id: string) {
    const reportIndex = data.findIndex((report) => report.id === id);
    if (reportIndex === -1) return;
    data.splice(reportIndex, 1);
    return {
      message: 'Report Deleted',
    };
  }
}
