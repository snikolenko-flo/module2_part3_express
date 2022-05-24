export class GalleryService {
    wrapUrlsInHtml(urlsList: URL[]): string {
        let images: string = '';

        urlsList.forEach(function(url) {
            images += `<div class="gallery">
                           <img src="${url}">
                       </div>`;
        });

        return images;
    }

    wrapNumbersInHtml(totalPages: number): string {
        let pagesList: string = '';

        for (let i=1; i<=totalPages; i++) {
            pagesList += `<a href="">
                              <li>${i}</li>
                          </a>`;
        }

        return pagesList;
    }

    redirectToPage(pageNumber: number): void {
        window.location.href = `../gallery.html?page=${pageNumber}`;
    }
}