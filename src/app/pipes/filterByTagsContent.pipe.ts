import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterByTagsContent',
    pure: false
})


export class FilterByTagsContentPipe implements PipeTransform {

    replaceCharSpe(text: string) {
        if (!text){
            return
        }
        return text.replace(/[û]/gi, 'u')
            .replace(/[áàâ]/gi, 'a')
            .replace(/[éèêë]/gi, 'e')
            .replace(/[íîï]/gi, 'i')
            .replace(/[óô]/gi, 'o')
            .replace(/ç/g, 'c')
    }


    transform(items, args: string[], searchText: string) {
        const patt = new RegExp(searchText, 'i');
        const [language, countryCode] = args;
        if (!searchText){
            return items;
        }
        return items.filter(item => {
            // By tags
            const tagsStr = JSON.stringify(item.tags)
            if (patt.test(tagsStr)) {
                return true;
            } else if (patt.test(this.replaceCharSpe(tagsStr))) {
                return true;
            }

            // By label
            if (item.lbl){
                let it = item.lbl[language] ? item.lbl[language] : item.lbl['en']
                if (patt.test(it)) {
                    return true;
                } else if (patt.test(this.replaceCharSpe(it))) {
                    return true;
                }
            }

            // By terms
            if (item.terms){
                let it = item.terms[language] ? item.terms[language] : item.terms['en']
                if (patt.test(it)) {
                    return true;
                } else if (patt.test(this.replaceCharSpe(it))) {
                    return true;
                }
            }
        });

    }
}
