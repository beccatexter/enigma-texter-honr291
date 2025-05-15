import { Input, Notifier, ValueEvent, WebzComponent } from "@boots-edu/webz";
import html from "./line-decrypt.component.html";
import css from "./line-decrypt.component.css";

function rotate(characterCode: number, rotation: number): number {
    return ((((characterCode + rotation - 32) % 94) + 94) % 94) + 32;
}

function decryptText(message: string): string {
    let characterCodes: number[] = [];
    let newCharacterCodes: number[] = [];
    let decrypted: string = "";
    for (let i = 0; i < message.length; i++) {
        let characterCode: number = message.charCodeAt(i);
        if (characterCode != 126) {
            characterCodes.push(characterCode);
        }
    }
    for (let j = 0; j < characterCodes.length; j++) {
        let newCharacterCode: number = rotate(characterCodes[j], -81);
        newCharacterCodes.push(newCharacterCode);
    }
    for (let k = 0; k < newCharacterCodes.length; k++) {
        decrypted += String.fromCharCode(newCharacterCodes[k]);
    }
    return decrypted;
}

export class LineDecryptComponent extends WebzComponent {
    decryptionChange: Notifier<string> = new Notifier<string>();
    constructor() {
        super(html, css);
    }

    @Input("decryption")
    onItemInputChange(e: ValueEvent) {
        const decrypted: string = decryptText(e.value);
        this.decryptionChange.notify(decrypted);
    }
}
