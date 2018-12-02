import { SampleService, SampleResponse } from '../Shared';


export class HomePage {

    label: HTMLElement;
    
    public Init(labelId: string, buttonId: string) { 
        this.label = document.getElementById(labelId); 

        const button = document.getElementById(buttonId);
        button.addEventListener('click', this.onButtonClick.bind(this), false);
    }

    private onButtonClick(e: Event) {
        const httpService = new SampleService();

        httpService.Post<SampleResponse>('/Home/GetMessage', {})
            .then((model) => {
                this.label.innerText = model.title;
            });
    }
}
