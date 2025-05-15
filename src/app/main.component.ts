import html from "./main.component.html";
import css from "./main.component.css";
import { BindValue, Click, WebzComponent } from "@boots-edu/webz";
import { LineEncryptComponent } from "./line-encrypt/line-encrypt.component";
import { LineDecryptComponent } from "./line-decrypt/line-decrypt.component";

/**
 * @description MainComponent is the main component of the app
 * @extends WebzComponent
 *
 */
export class MainComponent extends WebzComponent {
    // member fields
    private encryptions: LineEncryptComponent[] = [];
    private encryptionText: string[] = [];
    private encryptionCount: number = 0;

    private decryption: LineDecryptComponent[] = [];
    private decryptionText: string[] = [];
    private decryptionCount: number = 0;

    @BindValue("encryption-report")
    private report: string = "";

    @BindValue("decryption-report")
    private report2: string = "";

    @Click("addEncryptionButton")
    onNewEncryptionClick() {
        const encryption = new LineEncryptComponent();
        this.encryptions.push(encryption);
        this.addComponent(encryption, "encryptDetails");
        this.encryptionText.push("");
        let index = this.encryptionCount++;
        encryption.encryptionChange.subscribe((message: string) => {
            this.encryptionText[index] = message;
            this.report = this.encryptionText.join("\n");
        });
    }

    @Click("addDecryptionButton")
    onNewDecryptionClick() {
        const decryption = new LineDecryptComponent();
        this.decryption.push(decryption);
        this.addComponent(decryption, "decryptDetails");
        this.decryptionText.push("");
        let index = this.decryptionCount++;
        decryption.decryptionChange.subscribe((message: string) => {
            this.decryptionText[index] = message;
            this.report2 = this.decryptionText.join("\n");
        });
    }

    constructor() {
        super(html, css);
    }
}
