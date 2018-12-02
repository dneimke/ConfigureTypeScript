import { SampleService, SampleResponse } from '../Shared';


export class HomePage {

    labelId = 'outputLabel';
    buttonId = 'runButton';

    public Init() { 

        const label = document.getElementById(this.labelId); 
        const button = document.getElementById(this.buttonId);

        button.addEventListener('click', (e: Event) => {
            const httpService = new SampleService();  
                
            httpService.Post<SampleResponse>('/Home/GetMessage', {})
                .then((model) => {
                    label.innerText = model.title;
                });
        });
    }
}
