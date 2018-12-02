import { SampleService } from '../Http/SampleService';
import { SampleResponse } from '../Models/SampleModels';


export class HomePage {

    hostElementId = 'outputLabel';
    buttonId = 'runButton';

    public Init() { 

        const hostElement = document.getElementById(this.hostElementId); 
        const button = document.getElementById(this.buttonId);

        button.addEventListener('click', (e: Event) => {
            const httpService = new SampleService();  
                
            httpService.Post<SampleResponse>('/Home/GetMessage', {})
                .then((model) => {
                    hostElement.innerText = model.title;
                });
        });
    }
}

