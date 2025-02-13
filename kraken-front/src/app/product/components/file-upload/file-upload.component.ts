import {Component, inject} from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardTitle} from "@angular/material/card";
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatButton} from "@angular/material/button";
import {MatProgressBar} from "@angular/material/progress-bar";
import {NgClass, NgIf} from "@angular/common";
import {HttpClient} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {UploadFileService} from "../../services/upload-file.service";
import {Product} from "../../models/product.model";

@Component({
    selector: 'app-file-upload',
    imports: [
        MatCard,
        MatToolbar,
        MatCardTitle,
        MatCardContent,
        MatCardActions,
        MatIcon,
        MatButton,
        MatProgressBar,
        NgIf,
        NgClass
    ],
    templateUrl: './file-upload.component.html',
    styleUrl: './file-upload.component.scss'
})
export class FileUploadComponent {
    public isUploading: boolean = false;
    public message: string = '';


    private readonly httpClient: HttpClient = inject(HttpClient);
    private readonly snackBar: MatSnackBar = inject(MatSnackBar);

    public onFileChange(event: Event) {

        const file: File | undefined = (event.target as HTMLInputElement).files?.[0];

        if (!file) return;

        this.isUploading = true;
        this.message = 'Processing file';

        UploadFileService.parseExcelFile(file).then((data: Product[]) => {
            if (!data.length) {
                this.showMessage('Invalid or empty file!', true);
                return;
            }

            this.httpClient.post('http://localhost:3000/kraken', data).subscribe({
                next: () => this.showMessage('File uploaded successfully!', false),
                error: () => this.showMessage('Error uploading file!', true)
            });
        });
    }

    private showMessage(msg: string, isError: boolean): void {
        this.message = msg;
        this.isUploading = false;
        this.snackBar.open(msg, 'Close', {
            duration: 3000,
            panelClass: isError ? 'error-snackbar' : 'success-snackbar'
        });
    }
}
