export class Notice {
    constructor(
        public Id: number,
        public Title: string,
        public Description: string,
        public PrivacyStatus: string,
        public ImgUrl: string,
        public PostedDate: string,
    ) { }
}