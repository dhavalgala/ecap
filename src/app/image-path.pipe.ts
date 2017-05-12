import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'imagePath' })
export class ImagePathPipe implements PipeTransform {
    transform(imageName: string): string {
        let serverUrl = "http://www.ecap.net.in/admin/uploads/";
        // let serverUrl = "http://halb.tk/admin/uploads/";
        if (imageName) {
            return serverUrl + imageName;
        }
        return "";
    }
}
