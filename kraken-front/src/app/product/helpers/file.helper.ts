import {Product} from "../models/product.model";

export class FileHelper {

    static formatDate(dateString: any): string {
        if (!dateString) return '';

        if (typeof dateString === 'number') {
            const excelEpoch = new Date(1899, 11, 30); // Excel starts from Dec 30, 1899
            const jsDate = new Date(excelEpoch.getTime() + dateString * 86400000);
            return jsDate.toISOString().split('T')[0]; // Format YYYY-MM-DD
        }

        const parts = dateString.split(/[/\-]/);
        if (parts.length !== 3) return '';

        let [month, day, year] = parts;

        if (year.length === 2) {
            year = `20${year}`;
        } else if (year.length !== 4) {
            return '';
        }

        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    }


    static parsePrices(priceString: any): number[] {
        if (!priceString) return [];

        if (typeof priceString === 'number') {
            return [priceString < 0 ? 0 : priceString];
        }

        if (Array.isArray(priceString)) {
            return priceString.map(price => typeof price === 'number' ? (price < 0 ? 0 : price) : 0);
        }

        if (typeof priceString !== 'string') {
            return [];
        }

        return priceString
            .split(';')
            .map(price => parseFloat(price.replace(',', '.')))
            .map(price => isNaN(price) || price < 0 ? 0 : price);
    }


    static validateData(product: Product): boolean {
        return (product.name.trim().length > 0 && /^\d{4}-\d{2}-\d{2}$/.test(product.updated_at) && Array.isArray(product.prices)
            && product.prices.every((price) => price >= 0)
            && true && product.rate >= 0 && product.rate <= 100 && ['product', 'equipment'].includes(product.category));
    }
}

