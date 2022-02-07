export class BasePage{
    openPage (path: string){                     
        browser.url(path);       
    }    
}
export const Base = new BasePage()