import { SampleService, SampleResponse } from '../Shared';


export class HomePage {

    label: HTMLElement;
    button: HTMLElement;

    public Init(labelId: string, buttonId: string) { 

        this.label = document.getElementById(labelId); 
        this.button = document.getElementById(buttonId);

        this.button.addEventListener('click', this.onButtonClick.bind(this), false);
    }

    private onButtonClick(e: Event) {
        const httpService = new SampleService();

        httpService.Post<SampleResponse>('/Home/GetMessage', {})
            .then((model) => {
                this.label.innerText = model.title;
            });
    }
}
