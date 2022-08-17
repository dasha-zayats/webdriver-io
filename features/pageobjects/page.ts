export default class Page {
    public open (path: string) {
        return browser.url(`http://10.10.14.16/${path}`)
    }
}
