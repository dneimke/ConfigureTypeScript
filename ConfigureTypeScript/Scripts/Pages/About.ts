import { SampleService } from '../Http/SampleService';

export class AboutPage {

    constructor(private service: SampleService) { }

    public Init(someElementId: string) {

        console.info(`Initializing AboutPage / ${someElementId}`);
    }
}


document.addEventListener('DOMContentLoaded', function () {
    var page = new AboutPage(new SampleService());
    page.Init('something');
}, false);