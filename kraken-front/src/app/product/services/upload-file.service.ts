import {Injectable} from '@angular/core';

import * as XLSX from 'xlsx';
import {Product} from "../models/product.model";
import {FileHelper} from "../helpers/file.helper";

@Injectable({
    providedIn: 'root'
})
export class UploadFileService {


    static parseExcelFile(file: File): Promise<Product[]> {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e: ProgressEvent<FileReader>) => {
                if (!e.target || !e.target.result) {
                    reject(new Error("File read error: Unable to read the file."));
                    return;
                }

                const data = new Uint8Array(e.target.result as ArrayBuffer);
                const workbook = XLSX.read(data, {type: 'array'});

                const sheets = workbook.SheetNames.map((name) => ({
                    name,
                    data: XLSX.utils.sheet_to_json(workbook.Sheets[name]),
                }));

                let formattedData: Product[] = sheets.flatMap((sheet) =>
                    sheet.data
                        .map((row: any): Product => ({
                            name: row.Name || row.name,
                            updated_at: FileHelper.formatDate(row.UpdatedOn || row.updated_on),
                            prices: FileHelper.parsePrices(row.Prices || row.prices),
                            rate: Number(row["Rate %"] || row.rate),
                            category: sheet.name.toLowerCase().includes('equipment')
                                ? 'equipment'
                                : 'product',
                        }))
                        .filter(FileHelper.validateData)
                );

                resolve(formattedData);
            };

            reader.onerror = (err) => reject(new Error("File read failed: " + err));
            reader.readAsArrayBuffer(file);
        });
    }



}
