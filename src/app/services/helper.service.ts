import { Injectable } from "@angular/core";

@Injectable()
export class Helper {

    constructor() {


    }
    getImage(content) {
        var myRegexp = new RegExp(/<img.*?src="(.*?)"/);
        var match = myRegexp.exec(content);
        if (match)
            return match[1];
    }

    getContentSnippet(str) {
        return str.split(/\s+/).slice(0, 50).join(" ")+"...";
    }
}

