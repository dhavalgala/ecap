import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'imagePath' })
export class ImagePathPipe implements PipeTransform {
    transform(imageName: string, width: number = 0, height: number = 0): string {
        let serverUrl = 'http://www.ecap.net.in/admin/index.php/image/?name=';
        // let serverUrl = 'http://localhost/ecapBackend/index.php/image/?name=';
        if (imageName) {
            return serverUrl + imageName + '&width=' + width + '&height=' + height;
        }
        return '';
    }
}
