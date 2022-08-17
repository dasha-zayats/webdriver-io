import Page from './page';

class MainPage extends Page {
    
    public get inputMobilePhone() {
        return $('#phone');
    }

    public get inputPassword () {
        return $('#password');
    }

    public get btnLogIn () {
        return $('button[color="brandColor"]');
    }

    public get errorMessage () {
        return $('span.error-text');
    }

    public async login (phone: string, password: string) {
        await this.inputMobilePhone.setValue(phone);
        await this.inputPassword.setValue(password);
        await this.btnLogIn.click();
    }

    public open (url: string) {
        return super.open(url);
    }
}

export default new MainPage();
